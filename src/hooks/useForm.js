import { useState } from 'react'

function useForm(initialValues, validationRules) {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validate = () => {
        const newErrors = {}
        
        Object.keys(validationRules).forEach(field => {
            const rules = validationRules[field]
            const value = values[field]
            
            if (rules.required && (!value || value.trim() === '')) {
                newErrors[field] = `${rules.label} harus diisi`
            } else if (value) {
                if (rules.minLength && value.length < rules.minLength) {
                    newErrors[field] = `${rules.label} minimal ${rules.minLength} karakter`
                }
                
                if (rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors[field] = `${rules.label} tidak valid`
                }
                
                if (rules.match && value !== values[rules.match]) {
                    newErrors[field] = `${rules.label} tidak cocok`
                }
            }
        })
        
        return newErrors
    }

    const handleSubmit = async (submitFunction) => {
        setIsSubmitting(true)
        
        const newErrors = validate()
        setErrors(newErrors)
        
        if (Object.keys(newErrors).length === 0) {
            try {
                await submitFunction(values)
            } catch (error) {
                console.error('Form submission error:', error)
            }
        }
        
        setIsSubmitting(false)
    }

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit
    }
}

export default useForm
