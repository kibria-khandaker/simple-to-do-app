import React from 'react';

const ToDoList = () => {
    return (
        <section>
        <h1 class="text-center mt-5 mb-3">To Do List</h1>
        <div class="container w-75 mx-auto text-center">
          <div class="input-group">
            <input
            id="input_value"
              class="form-control"
              aria-label="With textarea"
            ></input>
            <button id="add_btn" class="btn btn-danger">Add Items</button>
          </div>
           {/* // table  */}
          <div class="mt-5">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="content-container">
                <tr id="table-content">
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Button</td>
                </tr>
              </tbody>
            </table>
          </div>
           {/* table  */}
        </div>
      </section>
    );
};

export default ToDoList;