import { Input, Button } from '../../ui'

function RegisterForm({
    values,
    errors,
    isSubmitting,
    onChange,
    onSubmit,
    onLoginClick
}) {
    return (
        <div className="w-full max-w-4xl mx-auto rounded-2xl">
            {/* Header */}
            <div className="text-left mb-4">
                <h1 className="text-3xl font-bold text-gray-900">Daftar</h1>
                <p className="text-gray-600">Daftar untuk menikmati penjualan barang</p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-2">
                <Input
                    label="Nama"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    error={errors.name}
                    placeholder="User"
                    required
                />

                <Input
                    label="Username"
                    name="username"
                    value={values.username}
                    onChange={onChange}
                    error={errors.username}
                    placeholder="user123"
                    required
                />

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    error={errors.email}
                    placeholder="user@gmail.com"
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

                <Input
                    label="Konfirmasi Password"
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    onChange={onChange}
                    error={errors.confirmPassword}
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
                    Daftar
                </Button>
            </div>

            <div className="text-center mt-2">
                <span className="text-xs text-gray-600">Sudah memiliki akun? </span>
                <button
                    type="button"
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-200"
                    onClick={onLoginClick}
                >
                    Masuk
                </button>
            </div>
        </div>
    )
}

export default RegisterForm