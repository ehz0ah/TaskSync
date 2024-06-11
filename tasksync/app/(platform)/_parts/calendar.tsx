"use client"
import React, { Fragment, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { EventSourceInput } from "@fullcalendar/core";

interface Event {
  title: string;
  start: Date | string;
  end?: Date | string;
  allDay: boolean;
  id: number;
}

export default function TimeTree() {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    start: "",
    allDay: false,
    id: 0,
  });

  // This useEffect hook is used to initialize the Draggable functionality on the FullCalendar events.
  // It runs whenever the 'allEvents' state changes.
  // The Draggable plugin allows users to drag and drop events on the calendar.
  useEffect(() => {
    // Get the HTML element with the ID 'draggable-el'.
    let draggableEl = document.getElementById("draggable-el");

    // Check if the element exists.
    if (draggableEl) {
      // Initialize the Draggable plugin on the element.
      // The plugin is initialized with the following options:
      // - itemSelector: specifies the selector for the elements that can be dragged
      // - eventData: a function that extracts the data from the dragged element and returns it as eventData
      new Draggable(draggableEl, {
        // Specify the selector for the elements that can be dragged.
        // In this case, it is the '.fc-event' class, which selects all the event elements in the calendar.
        itemSelector: ".fc-event",

        // Define the eventData function.
        // This function extracts the data from the dragged element and returns it as eventData.
        // The eventData is an object that contains the event title, ID, start date, and end date.
        eventData: function (eventEl) {
          // Get the title attribute of the event element.
          let title = eventEl.getAttribute("title");
          // Get the data attribute of the event element.
          let id = eventEl.getAttribute("data");
          // Get the start attribute of the event element.
          let start = eventEl.getAttribute("start");
          // Get the end attribute of the event element.
          let end = eventEl.getAttribute("end");
          // Return the eventData object.
          return { title, id, start, end };
        },
      });
    }
  }, [allEvents]);


  /**
   * This function handles the click event on a date in the calendar.
   * 
   * It takes in an object with properties 'date' and 'allDay', which represent
   * the selected date and whether the event is an all-day event.
   * 
   * It updates the 'newEvent' state by copying the properties of the current
   * 'newEvent' state, updating the 'start' property with the selected date,
   * setting the 'allDay' property to the value of 'allDay', and generating a
   * unique identifier using the current timestamp.
   * 
   * It then sets the 'showModal' state to true, which triggers the display of a
   * modal form for creating a new event.
   * 
   * @param {Object} arg - An object with properties 'date' and 'allDay'.
   * @param {Date} arg.date - The selected date.
   * @param {boolean} arg.allDay - Indicates whether the event is an all-day event.
   * @return {void} This function does not return anything.
   */
  function handleDateClick(arg: { date: Date; allDay: boolean }) {
    // Update the 'newEvent' state with the selected date, 'allDay' value,
    // and a unique identifier.
    setNewEvent({
      ...newEvent, // Copy the properties of the current 'newEvent' state
      start: arg.date, // Update the 'start' property with the selected date
      allDay: arg.allDay, // Update the 'allDay' property with the 'allDay' value
      id: new Date().getTime(), // Generate a unique identifier using the current timestamp
    });

    // Show the modal form for creating a new event
    setShowModal(true);
  }


  /**
   * This function adds a new event to the list of all events.
   * 
   * It takes in an object with properties 'date', 'draggedEl', and 'allDay'.
   * The 'date' property is a Date object representing the start date of the event.
   * The 'draggedEl' property is a reference to the HTML element that was dragged to create the event.
   * The 'allDay' property indicates whether the event is an all-day event.
   * 
   * This function creates a new event object by copying the properties of the 'newEvent' state.
   * It updates the 'start' property of the event object with the ISO string representation of the 'date' property.
   * It updates the 'title' property of the event object with the inner text of the 'draggedEl' element.
   * It updates the 'allDay' property of the event object with the 'allDay' property from the input object.
   * It updates the 'id' property of the event object with the current timestamp.
   * 
   * Finally, the function adds the new event to the list of all events by spreading the 'allEvents' state into a new array and appending the new event.
   * 
   * @param {Object} data - An object with properties 'date', 'draggedEl', and 'allDay'.
   * @return {void} This function does not return anything.
   */
  function addEvent(data: DropArg) {
    // Create a new event object by copying the properties of the 'newEvent' state
    const event = {
      ...newEvent,
      // Update the 'start' property of the event object with the ISO string representation of the 'date' property
      start: data.date.toISOString(),
      // Update the 'title' property of the event object with the inner text of the 'draggedEl' element
      title: data.draggedEl.innerText,
      // Update the 'allDay' property of the event object with the 'allDay' property from the input object
      allDay: data.allDay,
      // Update the 'id' property of the event object with the current timestamp
      id: new Date().getTime(),
    };
    // Add the new event to the list of all events by spreading the 'allEvents' state into a new array and appending the new event
    setAllEvents([...allEvents, event]);
  }


  /**
   * This function handles the delete modal event.
   * 
   * It takes in an object with an 'event' property, which represents the event to be deleted.
   * The function then sets the 'showDeleteModal' state to true, indicating that the delete modal should be shown.
   * It also sets the 'idToDelete' state to the 'id' property of the event, which will be used to identify the event to be deleted.
   * 
   * @param {Object} data - An object with an 'event' property representing the event to be deleted.
   * @return {void} This function does not return anything.
   */
  function handleDeleteModal(data: { event: { id: string } }) {
    // Set the 'showDeleteModal' state to true, showing the delete modal
    setShowDeleteModal(true);

    // Set the 'idToDelete' state to the 'id' property of the event
    setIdToDelete(Number(data.event.id));
  }

  function handleDelete() {
    setAllEvents(
      allEvents.filter((event) => Number(event.id) !== Number(idToDelete))
    );
    setShowDeleteModal(false);
    setIdToDelete(null);
  }


  /**
   * This function handles the close event of a modal.
   * 
   * It resets the state variables related to the modal and the event being
   * deleted.
   * 
   * The function sets the 'showModal' state to false, which closes the modal.
   * 
   * It also resets the 'newEvent' state to its initial state, by creating a new
   * object that has the same properties as the initial state, and setting the
   * 'start', 'allDay', and 'id' properties to their initial values.
   * 
   * It also sets the 'showDeleteModal' state to false, which closes the delete
   * modal.
   * 
   * Finally, it sets the 'idToDelete' state to null, which resets the ID of the
   * event being deleted.
   */
  function handleCloseModal() {
    // Close the modal
    setShowModal(false);

    // Reset the newEvent state to its initial state
    setNewEvent({
      title: "", // Reset the title to an empty string
      start: "", // Reset the start date to an empty string
      allDay: false, // Reset the allDay flag to false
      id: 0, // Reset the ID to 0
    });

    // Close the delete modal
    setShowDeleteModal(false);

    // Reset the ID of the event being deleted to null
    setIdToDelete(null);
  }


  /**
   * This function handles the change event of an input element.
   * 
   * It takes an event object of type 'React.ChangeEvent<HTMLInputElement>' as
   * input, which represents the change event that occurred in an input element.
   * 
   * The function updates the 'newEvent' state by creating a new object that is a
   * copy of the existing 'newEvent' state, and updating the 'title' property of
   * the new object with the value of the input element that triggered the change
   * event.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object.
   * @returns {void} This function does not return anything.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // Create a new object that is a copy of the existing 'newEvent' state
    const updatedEvent = {
      ...newEvent,
    };
    // Update the 'title' property of the new object with the value of the input
    // element that triggered the change event
    updatedEvent.title = e.target.value;
    // Update the 'newEvent' state with the new object
    setNewEvent(updatedEvent);
  };


  /**
   * This function handles the submit event of the form.
   * 
   * It prevents the default form submission behavior, updates the 'allEvents' state
   * by adding the 'newEvent' to the array of existing events, and resets the form
   * fields to their initial state.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
   * @return {void} This function does not return anything.
   */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the default form submission behavior.
    e.preventDefault();
    
    // Update the 'allEvents' state by adding the 'newEvent' to the array of existing events.
    setAllEvents([...allEvents, newEvent]);
    
    // Close the modal by setting the 'showModal' state to false.
    setShowModal(false);
    
    // Reset the form fields to their initial state.
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
  }


  /**
   * This function handles the event resize event.
   * 
   * It takes in an object with an 'event' property, which represents the updated event.
   * The function then updates the 'allEvents' state by mapping over the existing events,
   * and if the event being mapped has the same 'id' as the 'id' of the updated event, it
   * updates the 'start' and 'end' properties of the event to the corresponding properties
   * of the updated event. If the event being mapped does not have the same 'id' as the
   * 'id' of the updated event, it keeps the event as it is. 
   * 
   * @param {Object} data - An object with an 'event' property representing the updated event.
   * @return {void} This function does not return anything.
   */
  function handleEventResize(data: any) {
    // Destructure the 'event' property from the 'data' object
    const updatedEvent = data.event;

    // Update the 'allEvents' state by mapping over the existing events
    setAllEvents((prevEvents) =>
      prevEvents.map((event) =>
        // Check if the event being mapped has the same 'id' as the 'id' of the updated event
        event.id === Number(updatedEvent.id)
          ? {
              // If the event has the same 'id', update the 'start' and 'end' properties
              ...event,
              start: updatedEvent.start.toISOString(),
              end: updatedEvent.end ? updatedEvent.end.toISOString() : undefined,
            }
          : // If the event does not have the same 'id', keep the event as it is
            event
      )
    );
  }

  return (
    <>
      <main className="flex items-center justify-center h-full">
        <div className="h-[99vh] aspect-square">   {/*pt-24*/}
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek",
            }}
            buttonText={{
              today: 'Today',
              month: 'Month',
              week: 'Week',
            }}
            events={allEvents as EventSourceInput}
            nowIndicator={true}
            editable={true}
            droppable={true}
            selectable={true}
            selectMirror={true}
            dateClick={handleDateClick}
            drop={(data) => addEvent(data)}
            eventClick={(data) => handleDeleteModal(data)}
            eventDurationEditable
            eventResize={handleEventResize}
          />
        </div>

        <Transition show={showDeleteModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowDeleteModal}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Delete Event
                        </DialogTitle>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to delete this event?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:col-start-2"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                        onClick={handleCloseModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>

        <Transition show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Add Event
                        </DialogTitle>
                        <form action="submit" onSubmit={handleSubmit}>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="title"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-inset focus:ring-violet-600 
                            sm:text-sm sm:leading-6"
                              value={newEvent.title}
                              onChange={(e) => handleChange(e)}
                              placeholder="Title"
                            />
                          </div>
                          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:col-start-2 disabled:opacity-25"
                              disabled={newEvent.title === ""}
                            >
                              Create
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                              onClick={handleCloseModal}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </main>
    </>
  );
}
