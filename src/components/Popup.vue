<template>

<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mt-5 mb-1"
          x-small
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline teal lighten-5"> 
          Add new project
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-text-field v-model="person" label="Person" prepend-icon="mdi-face" :rules="inputRules"></v-text-field>  
            <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder-open" :rules="inputRules"></v-text-field>
            <v-textarea v-model="content" label="Information" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

                <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                max-width="290"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field 
                        :rules="inputRules"
                        prepend-icon="mdi-calendar"
                        label="Due by"
                        :value="computedDateFormattedDatefns"
                        clearable
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        @click:clear="date = null"                       
                        ></v-text-field>
                    </template>

                    <v-date-picker
                        v-model="date"
                        @change="menu2 = false"
                    ></v-date-picker>
            
                </v-menu>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        :loading="loading"
                        depressed small dark color="teal"
                        text
                        @click="submit"
                        >
                        Submit
                    </v-btn> 
                </v-card-actions>
            </v-form>  
        </v-card-text>
         
      </v-card>
      
    </v-dialog>
</div>

</template>

<script>

// import moment from 'moment'
import { format, parseISO } from 'date-fns'
import db from '@/fb'

export default {

    data () {
      return {
        title:'',
        content:'',
        date: '',
        person:'',
        inputRules:[
            v=> v.length >=3 || 'Minimum is 3 character'
        ],
        loading:false,
        dialog:false,
      }
    },    
    methods:{
        submit(){
            if (this.$refs.form.validate()){
                this.loading=true;
            const project = {
                title: this.title,
                content: this.content,
                date: format(parseISO(new Date(this.date).toISOString()), 'dd-MM-yyyy'),
                person: this.person,
                status: 'ongoing'
            }

            db.collection('projects').add(project).then(()=>{
                this.loading=false;
                this.dialog=false;
                this.$emit('projectAdded');
            })

            }
        }
    },

    computed: {
      computedDateFormattedDatefns () {
        return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : ''
      },
    },
}
</script>