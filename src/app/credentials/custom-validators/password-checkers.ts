import { FormGroup } from "@angular/forms";

export function PasswordChecker(passControlName:string,passCompareControlName:string){
  return (formgroup:FormGroup)=>{
    const pass=formgroup.controls[passControlName];
    const confPass=formgroup.controls[passCompareControlName];

    if(pass.value!==confPass.value)
    {
      confPass.setErrors({mustmatch:true});

    }else{
      confPass.setErrors(null);
    }
  }
  }
