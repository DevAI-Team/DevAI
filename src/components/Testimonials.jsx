import React, { useState } from 'react';
import { feedback } from '../constants';
import styles from '../style';
import Feedback from './Feedback';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Function to reorder feedback items
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Testimonials = () => {
  const [feedbackList, setFeedbackList] = useState(feedback);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    const newFeedbackList = reorder(
      feedbackList,
      source.index,
      destination.index
    );

    setFeedbackList(newFeedbackList);
  };

  return (
    <section id='our_team' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='flex-col absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>
           DEV AI Team <br className='sm:block hidden' /> Members
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      {/* Drag-and-Drop feedback cards */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="feedback-cards" direction="horizontal">
          {(provided) => (
            <div
              className='flex-row  flex overflow-x-auto sm:justify-start justify-center w-full feedback-container relative z-[1]'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {feedbackList.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}  //{/* Apply drag handle to entire card */}
                      className={`feedback-card ${snapshot.isDragging ? 'is-dragging' : ''}`}
                      style={{
                        ...provided.draggableProps.style, // keeps the current dragging styles intact
                        margin: '0 10px', // Optional: adjust the margin for proper spacing
                        boxShadow: snapshot.isDragging ? '0 5px 15px rgba(0, 0, 0, 0.3)' : 'none',
                        cursor: 'grab', // Indicate the card is draggable
                      }}
                    >
                      <Feedback key={card.id} {...card} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default Testimonials;
