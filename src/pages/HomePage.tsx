import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const HomePage = () => {
  const { users, getUsers } = useContext(GlobalContext);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  return (
    <div id='home' style={{backgroundImage: 'url(https://i.ibb.co/f4KNgBW/Team-Alkali-React-Logo.png)', backgroundRepeat: 'no-repeat', backgroundSize: '50%', backgroundPosition: 'center'}}>
      <div className='row text-center mt-5'>
        <div className='col'>
          <h2 style={{textShadow: '1px 1px white'}}>Welcome to some really cool startup</h2>
          <h4 className='text' style={{textShadow: '1px 1px white', color: 'grey'}}>
            Take a look at some of our other users!
          </h4>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-6 offset-3'>
       
            <ul className='list-group'>
            {/* Render Users in App */}
            {users?.map((user:User, i:number) => {
              return <li 
                     className='list-unstyled display-6 my-2' 
                     key={i}
                     style={{
                       borderStyle: 'solid double solid',
                       fontFamily: 'Helvetica', 
                       height: '100%', 
                       width: '100%',
                       textAlign: 'center',
                       backgroundImage: 'url(https://i.ibb.co/0ZbZ6Ws/White-Walkers.jpg)',
                       backgroundSize: '100%',
                       opacity: '.8'
                      }}
                     >{user.firstName}{''}{user.lastName}</li>
            })}
          </ul>        
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
