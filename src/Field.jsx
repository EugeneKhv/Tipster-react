
export default function Field({ label, value, onChange }) {
    return (
        <>
            <h4>
                {label}
            </h4>
            <input type="number" value={value}onChange={onChange}
            />
            
        </>
    )
}
