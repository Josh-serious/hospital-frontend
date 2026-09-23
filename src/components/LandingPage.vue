<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters>
                        <v-carousel-item src="/Images/carousel1.jpg " cover></v-carousel-item>
                        <v-carousel-item src="/Images/carousel2.jpg " cover></v-carousel-item>
                         <v-carousel-item src="/Images/carousel3.jpg" cover></v-carousel-item>
                        <v-carousel-item src="/Images/carousel4.jpg" cover></v-carousel-item>
                 </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <!-- About us -->
     <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-card align="center">
                    <v-card-title>Welcome to the Jamuhuri Hospital</v-card-title>
                    <v-card-text class="text-body-large">At Jamuhuri Hospital, we believe healthcare is more than treating illness — it's about caring for people. Since [founding year], we've been proud to serve the [city/region] community with compassionate, patient-centered care backed by advanced medical expertise.</v-card-text>
                    <v-card-text class="text-body-large">Our team of dedicated physicians, nurses, and healthcare professionals works around the clock to provide exceptional care across a wide range of specialties, including [emergency medicine, cardiology, pediatrics, maternity care, surgery, etc.].</v-card-text>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

<!--Clinics-->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="Images/clinic1.jpg" cover></v-img>
                    <v-card-title> Laboratory Services </v-card-title>
                    <v-card-text>Our hospital laboratory clinic provides accurate and timely diagnostic testing to support doctors and patients in making informed healthcare decisions. With modern laboratory equipment, professional staff, and a commitment to quality, we deliver dependable results in a safe and welcoming environment.</v-card-text>
                    <v-btn class="ma-4" color="primary">Learn More</v-btn>
                </v-card>
            </v-col>

                 <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/Images/clinic2.jpg" cover></v-img>
                    <v-card-title> COVID Testing </v-card-title>
                    <v-card-text>At the covid lab, we provide fast, accurate, and confidential COVID-19 testing you can rely on. Our certified laboratory team uses advanced testing methods to deliver trusted results, with convenient appointments and quick turnaround times so you can get answers when you need them.</v-card-text>
                    <v-btn class="ma-4" color="primary">Learn More</v-btn>
                </v-card>
            </v-col>

                 <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/Images/clinic3.jpg" cover></v-img>
                    <v-card-title> Urine Testing Lab</v-card-title>
                    <v-card-text>At our Urine Testing Laboratories, we provide accurate, confidential urine testing backed by certified laboratory professionals. From routine health screenings to workplace and pre-employment testing, we deliver reliable results with quick turnaround times.</v-card-text>
                    <v-btn class="ma-4" color="primary">Learn More</v-btn>
                </v-card>
            </v-col>

                 <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/Images/clinic4.jpg" cover></v-img>
                    <v-card-title> Specimen-examination Lab </v-card-title>
                    <v-card-text>At [Lab Name], we provide precise, dependable specimen examination backed by skilled laboratory professionals. From routine diagnostic samples to specialized analysis, we deliver clear, accurate results that healthcare providers and patients can trust.</v-card-text>
                    <v-btn class="ma-4" color="primary">Learn More</v-btn>
                </v-card>
            </v-col>

        </v-row>
     </v-container>

     <!-- Footer -->
      <v-container max-width="100%" class="mt-6 bg-secondary">
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-card height="300px" color="secondary flat"></v-card height>
                    <v-card-title>Subscribe to our mailing list.</v-card-title>
                    <v-card-text>Get the latest news, health tips, and hospital updates delivered to your inbox.</v-card-text>
                    <v-text-field v-model="inputValue" label="Email address" outlined class="ma-4">
                        <template v-slot:append-inner>
                        <v-btn color="primary"> Subscribe </v-btn>
                        </template>
                    </v-text-field>
                    <div class="text-center" mb-4>
                        <p>Follow us on:</p>
                        <v-icon icon="mdi-instagram"></v-icon>
                        <v-icon icon="mdi-twitter"></v-icon>
                        <v-icon icon="mdi-facebook"></v-icon>
                    </div>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat></v-card height>
                    <v-card-title> Contact Information </v-card-title>
                    <v-card text>
                        <p>
                            <v-icon icon="mdi-map-marker-radius-outline"></v-icon>
                            The Madaraka Hospital
                        </p>
                        <p> 123, Main Street Madaraka, Nairobi </p>
                        <p>
                            <v-icon icon="mdi-phone-outline"></v-icon>
                            info@jamuhuri.hospital.com
                        </p>
                    </v-card text>
            
            </v-col>

            <v-col>
            <v-card height="300px" color="secondary" flat>
                <v-card-title>Quick Links</v-card-title>
                <v-card-text>About us</v-card-text>
                <v-card-text>Clinics</v-card-text>
                <v-card-text>Find a Doctor</v-card-text>
                <v-card-text>News and Events</v-card-text>
            </v-card>
        </v-col>
                
        </v-row>
    </v-container>
        
                        
                    

</template>