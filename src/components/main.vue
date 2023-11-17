<script setup>
    import Button from 'primevue/button';
    import {useToast} from 'primevue/usetoast'
    import Toast from 'primevue/toast';
    import InputText from 'primevue/inputtext';
    import {ref} from 'vue';
    const value1=ref(null);
    const handle=()=>{
        console.log(value1.value);
    }
    
    const value =ref(null);
    const errorMessage =ref("null")
    const toast = useToast();
    const handleSubmit=(event) =>{
        console.log(value.value);
        event.preventDefault();
        if(!value.value){
            errorMessage.value = "Please Input Name "
        }else{
            toast.add({
                serverity : "info",
                summary : "form submited",
                detail : "value.value",
                life : 3000
            });
        }
    }

</script>
<template>
    <div class="main">
        <Button label="Submit" />
        <InputText type="text"
            placeholder="Username"
            v-model="value" 
            @keydown="handle"
        /> 

        <div class="card flex mt-4">
            <form @submit="handleSubmit" class="flex flex-column gap-2">
                <span class="p-float-label">
                    <InputText id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                    <label for="value">Name - Surname</label>
                </span>
                <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
                <Button type="submit" label="Submit" />
            </form>
            <Toast />
        </div>
    </div>
    
    
</template>
<style scoped>
    .main{
        width: 100%;
        height: 50vh;
        background-color: rgb(0, 21, 255);
    }
</style>