
function validateRow(row) {
    
    const errors = [];
  
    // validate name
    if (!row.asset_name || typeof row.asset_name !== 'string') {
      errors.push('Invalid asset_name');
    }
  
    // validate age
    if (!row.floor || typeof row.floor !== 'number') {
      errors.push('Invalid floor');
    }

    if (!row.room_number || typeof row.room_number !== 'number') {
        errors.push('Invalid room_number');
      }

      if (!row.replacement_cost || typeof row.replacement_cost !== 'number') {
        errors.push('Invalid replacement_cost');
      }

      if (!row.department || typeof row.department !== 'string') {
        errors.push('Invalid department');
      }

      if (!row.brand || typeof row.brand !== 'string') {
        errors.push('Invalid brand');
      }

      if (!row.description || typeof row.description !== 'string') {
        errors.push('Invalid description');
      }

      if (!row.model || typeof row.model !== 'string') {
        errors.push('Invalid model');
      }

      if (!row.assets_type_name || typeof row.assets_type_name !== 'string') {
        errors.push('Invalid assets_type_name');
      }

      if (!row.client_critical_asset || typeof row.client_critical_asset !== 'string') {
        errors.push('Invalid client_critical_asset,');
      }

      if (!row.strategic_asset || typeof row.client_critical_asset !== 'string') {
        errors.push('Invalid client_critical_asset,');
      }

      if (!row.installation_date || typeof row.installation_date !== 'date') {
        errors.push('Invalid installation_date');
      }
  
    // validate email
    if (!row.tenant_email || typeof row.tenant_email !== 'string' || !isValidEmail(tenant_email)) {
      errors.push('Invalid tenant_email');
    }
  
      return errors;
  }
  
  // validate email format
  function isValidEmail(email) {
    // basic email validation, you can use a more sophisticated method
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  module.exports = {validateRow }