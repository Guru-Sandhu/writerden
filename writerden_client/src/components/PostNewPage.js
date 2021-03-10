import React, { useState } from 'react'
import { Post } from '../api/requests'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export function PostNewPage () {
  const [text, setText] = useState("");

  const createPost = e => {
    e.preventDefault()
    Post.create(text).then(data => {
      if(!data.errors) {
        this.props.history.push(`/post/${data.id}`)
      }
    })
  }

  return (
    <div>
      <CKEditor 
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData()
          setText(data)
        }}
      />
      <button onClick={createPost}>Submit</button>
      <p>{text}</p>
    </div>
  )

}