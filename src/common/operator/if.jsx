export default props => {
    if(props.show){
        return props.children 
    } else {
        if(props._return){
            return props._return
        } else {
            return false
        }
    }
}