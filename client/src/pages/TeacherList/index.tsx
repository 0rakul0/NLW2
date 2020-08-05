import React from 'react'

import './style.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'


function TeacherList(){
    return(
      <div id="page-teacher-list" className="container">

         <PageHeader title="Estes são os proffys disponíveis">

         <form action="" id="search-teachers">

         <Select
                name="subject"
                label="Matéria" 
                options={[
                    //aqui fica as máterias de seleção
                    {value:'Artes', label:'Artes'},
                    {value:'Português', label:'Português'},
                    {value:'Matemática', label:'Matematica'},
                    {value:'Ciência', label:'Ciência'},
                    {value:'História', label:'História'}
                ]}/>
            
            <Select
                name="week_day"
                label="Dia da Semana" 
                options={[
                    //aqui fica os dias da semana
                    {value:'0', label:'Domingo'},
                    {value:'1', label:'Segunda-feira'},
                    {value:'2', label:'Terça-feira'},
                    {value:'3', label:'Quarta-feira'},
                    {value:'4', label:'Quinta-feira'},
                    {value:'5', label:'Sexta-feira'},
                    {value:'6', label:'Sábado'}
                ]}/>
      
            <Input type="time" name="time" label="Hora"/>
           
            </form>
         </PageHeader>

        <main>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>

        </main>

      </div>
        
    )
}

export default TeacherList;