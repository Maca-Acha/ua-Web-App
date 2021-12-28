const initialState = {
    state:[],
    auxiliar: [],
    cursos:[],
    curso: {}
}
const cursosReducer = (state = initialState, action) => {
    switch (action.type) {   
        case 'FILTRO_CURSOS':
            const filtrado = action.payload.cursos.filter((curso => curso.titulo.toLowerCase().startsWith(action.payload.value.toLowerCase())))
            return{
                ...state,
                auxiliar: filtrado
            }
        case 'CURSOS':
            return{
                ...state,
                cursos: action.payload
            }
        case 'CURSO_ID':
            return{
                ...state,
                curso: action.payload
            }
            default: return state
    }
}

export default cursosReducer;