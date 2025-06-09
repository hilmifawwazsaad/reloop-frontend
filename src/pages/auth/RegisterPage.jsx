import { useNavigate } from 'react-router-dom'
import { RegisterForm } from '../../components/features/auth'
import { useAuth, useForm } from '../../hooks'

function RegisterPage() {
    const navigate = useNavigate()
    const { register } = useAuth()

    // Form initial values
    const initialValues = {
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    // Validation rules
    const validationRules = {
        name: {
            required: true,
            label: 'Nama',
            minLength: 2
        },
        username: {
            required: true,
            label: 'Username',
            minLength: 3
        },
        email: {
            required: true,
            label: 'Email',
            email: true
        },
        password: {
            required: true,
            label: 'Password',
            minLength: 6
        },
        confirmPassword: {
            required: true,
            label: 'Konfirmasi Password',
            match: 'password'
        }
    }

    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit
    } = useForm(initialValues, validationRules)

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault()

        await handleSubmit(async (formData) => {
            const result = await register({
                name: formData.name,
                username: formData.username,
                email: formData.email,
                password: formData.password,
                role: 'seller' // Default role untuk marketplace
            })

            if (result.success) {
                // Redirect berdasarkan role atau ke dashboard
                navigate('/seller/dashboard')
            } else {
                // Handle error (bisa pakai toast notification)
                alert(result.message)
            }
        })
    }

    // Handle navigate to login
    const handleLoginClick = () => {
        navigate('/login')
    }

    return (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat flex"
            style={{ backgroundImage: `url('/bg.png')` }}>
            <div className="p-16 w-full">
                <RegisterForm
                    values={values}
                    errors={errors}
                    isSubmitting={isSubmitting}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                    onLoginClick={handleLoginClick}
                />
            </div>
        </div>
    )
}

export default RegisterPage