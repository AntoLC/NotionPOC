import React, { useEffect, useState } from 'react';
import * as Y from 'yjs';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import '@blocknote/react/style.css';
import { WebrtcProvider } from 'y-webrtc';
import { BlockNoteEditorOptions } from '@blocknote/core';

const doc = new Y.Doc();
const provider = new WebrtcProvider('my-document-id4', doc); // setup a yjs provider (explained below)

const Editor = () => {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    collaboration: {
      // The Yjs Provider responsible for transporting updates:
      provider,
      // Where to store BlockNote data in the Y.Doc:
      fragment: doc.getXmlFragment('document-store'),
      // Information (name and color) for this user:
      user: {
        name: 'My Username',
        color: '#ff0000',
      },
    },
  });

  // Renders the editor instance using a React component.
  return (
    <div>
      <h2>Editor</h2>
      <BlockNoteView editor={editor} />
    </div>
  );
};

export default Editor;
