import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';

const HomePage = async () => {
  const billboard = await getBillboard('6d7fd57f-6e96-4b4f-a3e7-c8342a488777');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
