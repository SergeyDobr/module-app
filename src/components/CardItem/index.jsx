import styles from './CardItem.module.css'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function CardItem(props) {
   // return (
   //    <Card className={styles.cardContainer}>
   //       <Card.Img className={styles.cardImage} src={props.src} />
   //       <Card.Body className={styles.cardTextContainer}>
   //          <Card.Title className={styles.cardTitle} >{props.name}</Card.Title>
   //          <Button className={styles.cardButton} >Go somewhere</Button>
   //       </Card.Body>
   //    </Card>
   // );
   return (
      <div className={styles.cardContainer}>
         <img className={styles.cardImage} src={props.src} alt="Category Image" />
         <div className={styles.cardTextContainer}>
            <h2 className={styles.cardTitle}>{props.name}</h2>
            <a href={props.link} className={styles.cardButton}>{props.textBtn}</a>
         </div>
      </div>
   )
}

export default CardItem;