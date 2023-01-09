export default function Input({ type, name, placeholder }) {
    return (
        <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-gray-700">{name}</label>
            <input type={type}
                name={name}
                className="form-input rounded-sm" placeholder={placeholder} />
        </div>
    )
}