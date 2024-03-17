

export const checkValidation=(email,password)=>{

    const isemail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const ispassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isemail) return "Please check Email"
    if(!ispassword) return "Please check PassWord"

    return null

}
