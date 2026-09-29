import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePatientsStore = defineStore('patients', () => {
 
    const createPatientsList = () =>[
    {
       id: 1,
       firstName: "Josh" ,
       lastName: "Sokoko" ,
       email: "joshsokoko@example.com" ,
       phone:"0116822892" ,
       residence:"123 Main Street" ,
       nationalId:"862233" ,
       dob:"1995-04-05" ,

    },
     {
       id: 2,
       firstName: "Amor" ,
       lastName: "Lucy" ,
       email: "amorlucy@example.com" ,
       phone:"0722345654" ,
       residence:"JK.154" ,
       nationalId:"834890" ,
       dob:"1996-09-08" ,

    },
     {
       id: 3,
       firstName: "Loro" ,
       lastName: "Kariuki" ,
       email: "lorokariuki@example.com" ,
       phone:"0789006754" ,
       residence:"123 houston" ,
       nationalId:"860096" ,
       dob:"2010-04-05" ,

    },
       {
       id: 4,
       firstName: "Karismatic" ,
       lastName: "Kariuki" ,
       email: "karismatickariuki@example.com" ,
       phone:"0116822802" ,
       residence:"123 Atlanta Street" ,
       nationalId:"862443" ,
       dob:"1906-04-05" ,
    }
]
   const patients = ref(createPatientsList())

     const selectedPatientId = ref(null)
     const selectedPatient = computed(() => {
        return patients.value.find(user => user.id === selectedPatientId.value)
     })
     function selectPatient(id) {
        selectedPatientId.value = id
    }

    function addPatient(data){
        const lastId = patients.value.length > 0 ? 
                         patients.value[patients.value.length - 1].id : 0
        data.id = lastId + 1
        patients.value.push(data)
    }

    const resetPatients = () => {
      patients.value = craetePatientsList()
    }

    function newTriage(data, patientId){
      const patient = patients.value.find(
         p => p.id === patientId
      );
      patient.triage = data
    }

    function newConsultation(data, patientId){
      const patient = patients.value.find(p => p.id === patientId);
      patient.consultation = data
    }

    function newLab(data, patientId){
      const patient = patients.value.find(p => p.id === patientId);
      patient.lab = data
    }

    function newPrescription(data, patientId){
      const patient = patients.value.find(p => p.id === patientId);
      patient.prescription = data
    }

  return {patients,
          addPatient,
          selectedPatientId,
          selectedPatient,
          selectPatient,
          resetPatients,
          newTriage,
          newConsultation,
          newLab,
          newPrescription,




  }
},
{
   persist: true,
 
})


