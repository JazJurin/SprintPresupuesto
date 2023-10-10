
export default function Service({data, selected, onSelect}) {
  return (
    <>
      <div className="border p-4">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p>Precio:{data.price}€</p>
        <label>
          <input
            type="checkbox"
            checked={selected}
            onChange={onSelect}
          />
          Seleccionar
        </label>
      </div>
    </>
  );
};
