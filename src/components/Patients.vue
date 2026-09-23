<script setup>
import {ref} from 'vue'


const patients = [
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
const showAddDialog = ref(false)

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="10">
                <h1>Patients</h1>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2" color="primary" icon="mdi-plus" @click="showAddDialog = true"></v-btn>

            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-table class="border">
                   <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Residence</th>
                        <th>National ID</th>
                        <th>Date of Birth</th> 
                        <th>Action</th>
                    </tr>                  
                </thead>
                    <tbody>
                        <tr v-for="item in patients">
                            <td>{{ item.firstName + " " + item.lastName }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.residence }}</td>
                            <td>{{ item.NationalId }}</td>
                            <td>{{ item.dob }}</td>
                            <td>
                                <v-btn color="primary" size="small">
                                    <v-icon icon="mdi-eye"></v-icon>
                                    View
                                </v-btn>
                            
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>

    <!-- Add Patient -->
    <v-dialog v-model="showAddDialog" maxWidth="600px">
        <v-form>
            <v-card>
                <v-row>
                    <v-card-text>Add Patient</v-card-text>
                    <v-spacer></v-spacer>
                      <v-btn class="ma-2" color="primary" icon="mdi-close" @click="showAddDialog = false"></v-btn>

                    
                  </v-row>
                  <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" outlined></v-text-field>
                    </v-col>
                <v-col md="6">
                    <v-text-field label="Last Name" outlined></v-text-field>
                </v-col>
                  </v-row>

                     <v-row>
                    <v-col md="6">
                        <v-text-field label="Email" outlined></v-text-field>
                    </v-col>
                <v-col md="6">
                    <v-text-field label="Phone" outlined></v-text-field>
                </v-col>
                  </v-row>

                  <v-row>
                    <v-col md="6">
                        <v-text-field label="Residents" outlined></v-text-field>
                    </v-col>
                <v-col md="6">
                    <v-text-field label="National ID" outlined></v-text-field>
                </v-col>
                  </v-row>

                  <

                     <v-row>
                    <v-col md="6">
                        <v-text-field label="Date of Birth" outlined></v-text-field>
                    </v-col>
                
                  </v-row>


            
            </v-card>"
        </v-form>
    </v-dialog>
</template>