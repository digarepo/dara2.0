import { Link } from 'react-router';
import { Button } from '~/components/ui/button';

export default function About() {
  return (
    <p>
      This is about page.
      <Button variant={'secondary'} size={'xs'}>
        <Link to={'/'}>Home</Link>
      </Button>
    </p>
  );
}
