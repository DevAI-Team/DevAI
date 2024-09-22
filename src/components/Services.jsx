import React, { useState } from 'react';
import { service } from '../constants';
import styles from '../style';
import ServicesCard from './ServicesCards';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Function to reorder feedback items
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Services = () => {
  const [cardList, setCardList] = useState(service);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    const newCardList = reorder(
      cardList,
      source.index,
      destination.index
    );

    setCardList(newCardList);
  };

  return (
    <section id='services' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='flex-col absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>
           Our Services <br className='sm:block hidden' />
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          We are deeply committed to the growth and success of our clients.
          </p>
        </div>
      </div>

      {/* Drag-and-Drop Services cards */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="feedback-cards" direction="horizontal">
          {(provided) => (
            <div
              className='grid grid-cols-3 w-full feedback-container relative z-[1]'
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }} // Grid layout for cards
            >
              {cardList.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}  
                      className={`feedback-card ${snapshot.isDragging ? 'is-dragging' : ''}`}
                      style={{
                        ...provided.draggableProps.style,
                        boxShadow: snapshot.isDragging ? '0 5px 15px rgba(0, 0, 0, 0.3)' : 'none',
                        cursor: 'grab',
                      }}
                    >
                      {/* Pass the apps array to each Services card */}
                      <ServicesCard key={card.id} {...card} apps={card.apps} />
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

export default Services;
