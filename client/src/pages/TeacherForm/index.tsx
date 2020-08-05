import React, {useState, FormEvent} from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'
import './style.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm(){
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    // função para add novos hosrarios durante na semana
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0,  from:'',   to:''}
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0,  from:'',   to:''}
        ]);
        scheduleItems.push();
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            shcedule: scheduleItems
        }).then(()=>{
            alert('cadastro realizado com sucesso')
        }).catch(()=>{
            alert('erro no cadastro')
        });
    }
    function setScheduleItemValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=>{
            if(index===position){
                return {...scheduleItem, [field]:value }
            }
            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems);
    }
    return(

        <div id="page-teacher-form" className="container">

        <PageHeader 
        
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo, é preencher esse formulario de inscrição."/>

        <main>
            <form onSubmit={handleCreateClass}>
            <fieldset>
                <legend>  Seus Dados  </legend>

            <Input name="name" label="Nome Completo" 
            value={name} onChange={(e)=>{setName(e.target.value)}}/>

            <Input name="avatar" label="Avatar"
            value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>

            <Input name="whatsapp" label="Whatsapp"
            value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}/>

            <Textarea name="bio" label="Biografia"
            value={bio} onChange={(e)=>{setBio(e.target.value)}}/>

            </fieldset>

            <fieldset>
                <legend>  Sobre a Aula  </legend>
            <Select
                name="subject" label="Matéria"
                value={subject} onChange={(e)=>{setSubject(e.target.value)}}
                options={[
                    //aqui fica as máterias de seleção
                    {value:'Artes', label:'Artes'},
                    {value:'Português', label:'Português'},
                    {value:'Matemática', label:'Matematica'},
                    {value:'Ciência', label:'Ciência'},
                    {value:'História', label:'História'}
                ]}/>
            <Input name="cost" label="Custo hora aula"
            value={cost} onChange={(e)=>{setCost(e.target.value)}}/>

            </fieldset>
            <fieldset>
                <legend>
                    Horários Disponíveis
                <button type="button" onClick={addNewScheduleItem}> + Novo Horário</button>
                </legend>

                {scheduleItems.map((scheduleItem, index) =>{
                    return(
                        <div key={scheduleItem.week_day} className="schedule-item">
                    
                <Select
                name="week_day" label="Dia da Semana" value={scheduleItem.week_day}
                onChange={ e=> setScheduleItemValue(index, 'week_day', e.target.value)}
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
                <Input name="from" label="Das" type="time" value={scheduleItem.from}
                onChange={ e=> setScheduleItemValue(index, 'from', e.target.value)}/>

                <Input name="to" label="até" type="time" value={scheduleItem.to}
                onChange={ e=> setScheduleItemValue(index, 'to', e.target.value)}/>
                </div>
                    )
                })}
            </fieldset>
            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante!!! <br /> Preencha todos os dados
                </p>
                <button type="submit"> Salvar Cadastro</button>
            </footer>
            </form>
        </main>

     </div>
       
    )
}

export default TeacherForm;