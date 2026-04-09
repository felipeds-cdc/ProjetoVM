/**
 * =====================================================
 * Form Validation - VORTEX MOTORS
 * Descrição: Validação client-side para formulários
 * Versão: 1.0.0
 * =====================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initializeFormValidation();
});

/**
 * Inicializa validação em todos os formulários da página
 */
function initializeFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!validateForm(form)) {
        e.preventDefault();
      }
    });
  });
}

/**
 * Valida um formulário completo
 * @param {HTMLFormElement} form - Formulário a ser validado
 * @returns {boolean} - Se é válido
 */
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}

/**
 * Valida um campo individual
 * @param {HTMLElement} field - Campo a ser validado
 * @returns {boolean} - Se é válido
 */
function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let message = '';
  
  // Remove mensagem de erro anterior
  removeError(field);
  
  // Validação de campo obrigatório
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    message = 'Este campo é obrigatório';
  }
  
  // Validação de email
  if (field.type === 'email' && value && !isValidEmail(value)) {
    isValid = false;
    message = 'Email inválido';
  }
  
  // Validação de CPF
  if (field.placeholder?.includes('CPF') && value && !isValidCPF(value)) {
    isValid = false;
    message = 'CPF inválido';
  }
  
  // Validação de tamanho mínimo
  if (field.type === 'password' && value && value.length < 6) {
    isValid = false;
    message = 'Senha deve ter no mínimo 6 caracteres';
  }
  
  if (!isValid) {
    showError(field, message);
  }
  
  return isValid;
}

/**
 * Valida formato de email
 * @param {string} email - Email a ser validado
 * @returns {boolean}
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Valida CPF brasileiro
 * @param {string} cpf - CPF a ser validado
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  const cleanCPF = cpf.replace(/\D/g, '');
  
  if (cleanCPF.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
  
  let sum = 0;
  let remainder;
  
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanCPF.charAt(i - 1)) * (11 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCPF.charAt(9))) return false;
  
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanCPF.charAt(i - 1)) * (12 - i);
  }
  
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCPF.charAt(10))) return false;
  
  return true;
}

/**
 * Exibe mensagem de erro
 * @param {HTMLElement} field - Campo com erro
 * @param {string} message - Mensagem de erro
 */
function showError(field, message) {
  const errorElement = document.createElement('div');
  errorElement.className = 'form-error';
  errorElement.style.cssText = `
    color: #ff4444;
    font-size: 0.85rem;
    margin-top: 5px;
  `;
  errorElement.textContent = message;
  
  field.style.borderColor = '#ff4444';
  field.insertAdjacentElement('afterend', errorElement);
}

/**
 * Remove mensagem de erro
 * @param {HTMLElement} field - Campo
 */
function removeError(field) {
  const errorElement = field.nextElementSibling;
  if (errorElement && errorElement.classList.contains('form-error')) {
    errorElement.remove();
  }
  field.style.borderColor = '';
}
