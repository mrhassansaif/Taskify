import React, { useState } from "react";
import "./Todo.css";
import {
  getAuth,
  auth,
  onAuthStateChanged,
  doc,
  getDoc,
  db,
  updateDoc,
  signOut
} from ".././FirebaseConfig/FirebaseConfig";

export default function Todo() {
  const [data, setdata] = useState();
  const [todos, setTodos] = useState("");
  const [newTodo, setNewTodo] = useState([]);

  let snapData;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const ref = doc(db, "Users", user.uid);
      const docSnap = getDoc(ref).then((snapshot) => {
        snapData = snapshot.data();
        console.log(snapData.name);
        const uid = user.uid;
        console.log(uid);
        setdata(snapData.name);
      });
    } else {
      console.log("error");
    }
  });

  const todoEvent = (event) => {
    setTodos(event.target.value);
  };

  const get_update = () => {
    const currentDate = new Date(); // get the current date
    const todoObject = { date: currentDate, value: todos };
    setNewTodo((prevTodo) => {
      return [...prevTodo, todoObject];

    });
    console.log(todos)
    setTodos(" ");
    document.getElementById("title").value = "";
  };

  const deleteTodo = (index) => {
    setNewTodo((prevTodo) => {
      return prevTodo.filter((todo, todoIndex) => {
        return todoIndex !== index;
      });
    });
  };

  // SIGN OUT
  const LogOutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location = '/'
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });

  }
  return (
    <>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div
                className="card"
                id="list1"
                style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
              >
                <div class="card-body py-4 px-4 px-md-5">
                  <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <u> Welcome Taskify Mr. {data}</u>
                    <a
                      href="#!"
                      class="text-danger"
                      data-mdb-toggle="tooltip"
                      title="Delete todo"

                    >
                      <i class="fas fa-sign-out-alt" style={{ marginLeft: "13%" }} onClick={LogOutUser}></i>
                    </a>
                  </p>

                  <div class="pb-2">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex flex-row align-items-center">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="title"
                            placeholder="Add new..."
                            onChange={todoEvent}
                          />
                          <a
                            href="#!"
                            data-mdb-toggle="tooltip"
                            title="Set due date"
                          >
                            <i class="fas fa-calendar-alt fa-lg me-3"></i>
                          </a>
                          <div>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={get_update}
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="my-4" />

                  {/* <div class="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                    <p class="small mb-0 me-2 text-muted">Filter</p>
                    <select class="select">
                      <option value="1">All</option>
                      <option value="2">Completed</option>
                      <option value="3">Active</option>
                      <option value="4">Has due date</option>
                    </select>
                    <p class="small mb-0 ms-4 me-2 text-muted">Sort</p>
                    <select class="select">
                      <option value="1">Added date</option>
                      <option value="2">Due date</option>
                    </select>
                    <a
                      href="#!"
                      style={{ color: "#23af89" }}
                      data-mdb-toggle="tooltip"
                      title="Ascending"
                    >
                      <i class="fas fa-sort-amount-down-alt ms-2"></i>
                    </a>
                  </div> */}

                  {newTodo.map((item, index) => {
                    return (<ul class="list-group list-group-horizontal rounded-0 bg-transparent">
                      <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                        <div class="form-check">
                          <p class="lead fw-normal mb-0">
                            {index + 1}
                          </p>
                        </div>
                      </li>
                      <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <p class="lead fw-normal mb-0">
                          {item.value}
                        </p>
                      </li>
                      <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                        <div class="d-flex flex-row justify-content-end mb-1">
                          {/* <a
                          href="#!"
                          class="text-info"
                          data-mdb-toggle="tooltip"
                          title="Edit todo"
                        >
                          <i class="fas fa-pencil-alt me-3"></i>
                        </a> */}
                          <a
                            href="#!"
                            class="text-danger"
                            data-mdb-toggle="tooltip"
                            title="Delete todo"
                            onClick={() => deleteTodo(index)}
                          >
                            <i class="fas fa-trash-alt"></i>
                          </a>
                        </div>
                        <div class="text-end text-muted">
                          <a
                            href="#!"
                            class="text-muted"
                            data-mdb-toggle="tooltip"
                            title="Created date"
                          >
                            <p class="small mb-0">
                              <i class="fas fa-info-circle me-2"></i>{item.date.toLocaleString()}
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>);
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
