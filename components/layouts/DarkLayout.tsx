
type Props = {
  children: React.ReactNode; // 👈️ added type for children
};

export const DarkLayout = ( props: Props ) => {
  return (
    <div style={{
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h2>Dark layout</h2>
       <div>
            { props.children }
       </div>
    </div>
  )
}
