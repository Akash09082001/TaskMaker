import { Card, CardContent, CardHeader } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const SkeletonCard = () => {

    const cards = Array.from({ length: 1 }, (_, i) => i + 1);

    return (
        <div className='grid grid-cols-1 gap-5 h-full w-full items-center justify-center'>
            {
                cards.map((card) => (
                    <Card key={card} className="backdrop-blur-sm max-w-sm w-96 mx-auto flex-col h-fit">
                        <CardHeader className="flex flex-col gap-2 items-center w-full">
                            <div className='w-full'>
                                <Skeleton className="h-16 w-full" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className='w-full'>
                                <Skeleton className="h-8 w-full" />
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </div>

    )
}

export default SkeletonCard
