import styles from '@/styles/components/Row.module.css';

export default function Row({id, name, link, price}) {
  
  const handleClick = async () => {
    const response = await fetch('/api/deleteFromList', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });

    if (response.ok) {
      console.log('Deleted');
      window.location.reload();
    } else {
      console.log('Error');
    }
  }

 return (
    <div className={styles.row}>
        <div>
          <input type="checkbox" />
        </div>
        <div>{name}</div>
        <div><a href={link}>{link}</a></div>
        <div>{price} zł</div>
        <div>
          <a href={`/edit?id=${id}&name=${name}&link=${link}&price=${price}`} className={styles.editLink}><span className={styles.action}>✏️</span></a>
          <span className={styles.action} onClick={handleClick}>🗑️</span>
        </div>
    </div>
 )
}