import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { fetchAllElementsThunk } from '../actions/elementsActions'
import elementModel from '../models/elementModel'
import ElementCard from './ElementCard'
import { motion } from 'framer-motion'

function AllElements() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllElementsThunk())
  }, [dispatch])

  const allElements = useAppSelector(
    (state) => state.elementsState as elementModel[]
  )

  return (
    <>
      <h3>All Elements</h3>
      <motion.section
        className="elementsGrid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duation: 0.5 }}
      >
        {allElements.map((element) => (
          <ElementCard key={element.id} element={element} />
        ))}
      </motion.section>
    </>
  )
}

export default AllElements
