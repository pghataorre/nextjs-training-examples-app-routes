const Loader = ({loadingText}: { loadingText?: string | null}) => <><h3>{!loadingText ? ('Loading....') : (loadingText) }</h3></>

export default Loader;