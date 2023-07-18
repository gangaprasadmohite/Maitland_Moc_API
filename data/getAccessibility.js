module.exports = () => {
  return {
    user: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    metadata: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    role: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    group: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    userrole: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    grouprole: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    legalentity: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: true,
    },
    contract: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: true,
    },
    service: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: false,
    },
    servicegroup: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: false,
    },
    portfolio: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: true,
    },
    allocations: {
      view: true,
      edit: true,
      delete: true,
      create: false,
      checker: true,
      approver: true,
      createnote: true,
      resendemail: true,
      resendoltptemplate: true,
    },
    policy: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: true,
    },
    companymapping: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    applicationpage: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    reports: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    catalogitem: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    emailconfiguration: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    mlassetowner: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: true,
    },
    mlproductbuildingblock: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: true,
    },
    mlallocationbuildingblock: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: true,
    },
    mlstructure: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: true,
    },
    rnleventproductallocation: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: true,
      approver: true,
      createnote: true,
      resendemail: false,
      resenddnstemplate: false,
    },
  };
};
