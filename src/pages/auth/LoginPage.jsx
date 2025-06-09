import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../../components/features/auth'
import { useAuth, useForm } from '../../hooks'

function LoginPage() {
    const navigate = useNavigate()
    const { login } = useAuth()

    // Form initial values
    const initialValues = {
        email: '',
        password: ''
    }

    // Validation rules
    const validationRules = {
        email: {
            required: true,
            label: 'Email',
            email: true
        },
        password: {
            required: true,
            label: 'Password',
            minLength: 6
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
            const result = await login({
                email: formData.email,
                password: formData.password
            })

            if (result.success) {
                // Redirect berdasarkan role user
                const userData = JSON.parse(localStorage.getItem('user'))

                switch (userData.role) {
                    case 'admin':
                        navigate('/admin/dashboard')
                        break
                    case 'seller':
                        navigate('/seller/dashboard')
                        break
                    case 'user':
                    default:
                        navigate('/')
                        break
                }
            } else {
                // Handle error (bisa pakai toast notification)
                alert(result.message)
            }
        })
    }

    // Handle navigate to register
    const handleRegisterClick = () => {
        navigate('/register')
    }

    return (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat flex"
            style={{ backgroundImage: `url('/bg.png')` }}>
            <div className="p-16 w-full">
                <LoginForm
                    values={values}
                    errors={errors}
                    isSubmitting={isSubmitting}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                    onRegisterClick={handleRegisterClick}
                />
            </div>
        </div>
    )
}

export default LoginPage