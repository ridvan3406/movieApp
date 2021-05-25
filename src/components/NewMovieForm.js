import React,{useState} from 'react'
import { Button,Form } from 'semantic-ui-react'

const NewMovieForm = () => {

    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("")
    console.log(title)
    console.log(cover)
    return (
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Cover URL</label>
            <input placeholder='Cover URL' value={cover} onChange={(e)=>setCover(e.target.value)}/>
          </Form.Field>
          <Button primary type='submit'>Submit</Button>
        </Form>
      )
}

export default NewMovieForm