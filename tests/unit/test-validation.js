/**
 * =====================================================
 * Testes Unitários - Validação de Formulários
 * VORTEX MOTORS
 * =====================================================
 */

// Nota: Estes testes são conceituais e requerem Jest ou framework similar
// Para rodar testes manualmente, copie as funções para console do browser

console.log('🧪 VORTEX MOTORS - Test Suite');
console.log('================================');

/**
 * Teste: Validação de Email
 */
function testEmailValidation() {
  const validEmails = [
    'usuario@email.com',
    'nome.sobrenome@dominio.com.br',
    'teste123@gmail.com'
  ];
  
  const invalidEmails = [
    'usuario@',
    '@email.com',
    'usuario@email',
    'usuario@email.',
    ''
  ];
  
  console.log('\n📧 Testando emails válidos...');
  validEmails.forEach(email => {
    const result = isValidEmail(email);
    console.log(`${result ? '✅' : '❌'} ${email}`);
  });
  
  console.log('\n📧 Testando emails inválidos...');
  invalidEmails.forEach(email => {
    const result = isValidEmail(email);
    console.log(`${!result ? '✅' : '❌'} ${email} (deve ser falso)`);
  });
}

/**
 * Teste: Validação de CPF
 */
function testCPFValidation() {
  const validCPFs = [
    '123.456.789-09',
    '11144477735'
  ];
  
  const invalidCPFs = [
    '111.111.111-11',
    '000.000.000-00',
    '123',
    ''
  ];
  
  console.log('\n🆔 Testando CPFs válidos...');
  validCPFs.forEach(cpf => {
    const result = isValidCPF(cpf);
    console.log(`${result ? '✅' : '❌'} ${cpf}`);
  });
  
  console.log('\n🆔 Testando CPFs inválidos...');
  invalidCPFs.forEach(cpf => {
    const result = isValidCPF(cpf);
    console.log(`${!result ? '✅' : '❌'} ${cpf} (deve ser falso)`);
  });
}

// Executar testes se funções existirem
if (typeof isValidEmail === 'function') {
  testEmailValidation();
} else {
  console.log('⚠️  Função isValidEmail não encontrada. Carregue form-validation.js primeiro.');
}

if (typeof isValidCPF === 'function') {
  testCPFValidation();
} else {
  console.log('⚠️  Função isValidCPF não encontrada. Carregue form-validation.js primeiro.');
}

console.log('\n================================');
console.log('✅ Testes concluídos!');
