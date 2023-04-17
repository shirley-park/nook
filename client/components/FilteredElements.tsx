// Imports

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useEffect } from 'react'

// import fetchAllThunk from elements.actions
import { fetchAllElementsThunk } from '../actions/elementsActions'

// element model
import elementModel from '../models/elementModel'

import { useParams } from 'react-router-dom'

// delete button style
// import IconButton from '@mui/material/IconButton'
// import DeleteIcon from '@mui/icons-material/Delete'
// // edit icon
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
// import { Icon } from '@mui/material'

import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

// --------------------

function FilteredElements() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllElementsThunk())
  }, [dispatch])

  const params = useParams()
  const projectId = Number(params.id)
  console.log(projectId)

  const allElements = useAppSelector(
    (state) => state.elementsState as elementModel[]
  )

  const filteredList = allElements.filter((el) => el.project_id === projectId)

  return (
    <>
      <h3>Elements</h3>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        {/* <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab> */}
      </Box>

      <section className="elementsGrid">
        {filteredList.map((element) => (
          <div key={element.id} className="elementCard">
            <div className="elementFlexContainer">
              <h3>{element.item_name}</h3>
              <p className="elementTag">{element.element_tag}</p>
            </div>
            <h4>{element.make}</h4>
            <hr />
            <img src={element.imageUrl} alt={element.item_name} />
            <p>{element.description}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default FilteredElements
