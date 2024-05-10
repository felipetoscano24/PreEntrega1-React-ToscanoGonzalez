import { object, string, number } from "yup"

let userSchema = object({
    name: string().required(),
    phone: number().required().positive().integer(),
    email: string().email().required(),
  });

  const validateForm = async(dataForma) => {
    try {
        await userSchema.validate(dataForma)
        return { status: "success" }
    } catch(error){
        return {status: "error", error: error.message}
    }
  }

export default validateForm