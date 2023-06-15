import React, { useEffect, useState } from 'react';
import {
  DocumentData, collection,
  onSnapshot, orderBy, query,
} from 'firebase/firestore';
import { db } from '../../api/firebase';

export default function Todos(): JSX.Element {
  const [todos, setTodos] = useState<DocumentData[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [input, setInput] = useState('');
  const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map((doc: DocumentData) => ({
        id: doc.id,
        item: doc.data()
      })));
    });
  }, [input]);
  return (
    <>
      <div>Todos</div>
      {todos.map((el) => (
        <div key={el.id}>
          {el.item.todo}
        </div>
      ))}
    </>
  );
}
