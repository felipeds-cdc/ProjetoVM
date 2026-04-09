/**
 * =====================================================
 * Logger - VORTEX MOTORS
 * Descrição: Sistema de logs estruturado para o frontend
 * Versão: 1.0.0
 * =====================================================
 */

const Logger = {
  /**
   * Níveis de log
   */
  LEVELS: {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
  },

  /**
   * Nível mínimo de log (ajustar conforme ambiente)
   * production: WARN, development: DEBUG
   */
  minLevel: process?.env?.NODE_ENV === 'production' ? 2 : 0,

  /**
   * Log de debug
   */
  debug(message, data = null) {
    this._log('DEBUG', message, data);
  },

  /**
   * Log de informação
   */
  info(message, data = null) {
    this._log('INFO', message, data);
  },

  /**
   * Log de aviso
   */
  warn(message, data = null) {
    this._log('WARN', message, data);
  },

  /**
   * Log de erro
   */
  error(message, error = null) {
    this._log('ERROR', message, error);
  },

  /**
   * Método interno de log
   * @private
   */
  _log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      ...(data && { data }),
    };

    // Não loga se nível for menor que o mínimo
    if (this.LEVELS[level] < this.minLevel) return;

    // Output formatado no console
    const consoleMethod = level.toLowerCase();
    const prefix = `[VORTEX ${level}]`;
    
    if (console[consoleMethod]) {
      console[consoleMethod](prefix, message, data || '');
    } else {
      console.log(prefix, message, data || '');
    }

    // Em produção, poderia enviar para um serviço de log
    if (level === 'ERROR') {
      this._sendToServer(logEntry);
    }
  },

  /**
   * Envia log para servidor (produção)
   * @private
   */
  _sendToServer(logEntry) {
    // Implementar envio de logs para servidor
    // Exemplo: fetch('/api/logs', { method: 'POST', body: JSON.stringify(logEntry) })
    if (process?.env?.NODE_ENV === 'production') {
      // Simulação - em produção, descomentar e configurar endpoint
      // fetch('/api/logs', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(logEntry)
      // }).catch(err => console.error('Erro ao enviar log:', err));
    }
  },
};

// Exporta para uso global
if (typeof window !== 'undefined') {
  window.Logger = Logger;
}
