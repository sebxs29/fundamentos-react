import { useEffect, useState } from "react"

/**
 * Hook personalizado que guarda un estado en localStorage.
 * Mantiene el mismo comportamiento que useState: [valor, setValor]
 *
 * @param {string} clave        Nombre con el que se guarda en localStorage
 * @param {*}      valorInicial Valor usado si todavía no hay nada guardado
 */
const useLocalStorage = (clave, valorInicial) => {
  // 1. Inicializamos el estado leyendo lo que ya exista en localStorage
  //    (se usa una función para que solo se lea una vez al montar)
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave)
      return guardado !== null ? JSON.parse(guardado) : valorInicial
    } catch (error) {
      console.error(`No se pudo leer "${clave}" de localStorage:`, error)
      return valorInicial
    }
  })

  // 2. Cada vez que el valor cambia, lo sincronizamos con localStorage
  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor))
    } catch (error) {
      console.error(`No se pudo guardar "${clave}" en localStorage:`, error)
    }
  }, [clave, valor])

  // 3. Devolvemos la misma forma que useState
  return [valor, setValor]
}

export default useLocalStorage
