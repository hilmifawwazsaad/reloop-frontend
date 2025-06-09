import { Input, Button } from '../../ui'

function LoginForm({
    values,
    errors,
    isSubmitting,
    onChange,
    onSubmit,
    onRegisterClick
}) {
    return (
        <div className="w-full max-w-4xl mx-auto rounded-2xl">
            {/* Header */}
            <div className="text-left mb-4">
                <h1 className="text-3xl font-bold text-gray-900">Masuk</h1>
                <p className="text-gray-600">Silahkan masuk untuk melakukan penjualan barang</p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-2">
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    error={errors.email}
                    placeholder="seller@gmail.com"
                    required
                />

                <Input
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={onChange}
                    error={errors.password}
                    placeholder="••••••••••"
                    required
                />
            </form>

            <div>
                <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    loading={isSubmitting}
                    className="mt-8"
                >
                    Masuk
                </Button>
            </div>

            <div className="text-center mt-2">
                <span className="text-xs text-gray-600">Belum memiliki akun? </span>
                <button
                    type="button"
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-200"
                    onClick={onRegisterClick}
                >
                    Daftar
                </button>
            </div>
        </div>
    )
}

export default LoginForm
