const initialState = {
    state:[],
    auxiliar: [],
    cursos:[],
    curso: {},
    cursosFav:[],
}
const cursosReducer = (state = initialState, action) => {
    switch (action.type) {   
        case 'FILTRO_CURSOS':
            const filtrado = action.payload.cursos.filter((curso => curso.titulo.toLowerCase().includes(action.payload.value.toLowerCase())))
            return{
                ...state,
                auxiliar: filtrado
            }
        case 'CURSOS':
            return{
                ...state,
                cursos: action.payload,
                auxiliar: action.payload
            }
        case 'CURSO_ID':
            return{
                ...state,
                curso: action.payload
            }
        case 'CURSOS_FAV':
            return{
                ...state,
                cursosFav: action.payload
            }
            default: return state
    }
}

export default cursosReducer;