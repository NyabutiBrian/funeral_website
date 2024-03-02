import React, { useState, useEffect  } from 'react';

const Condolence = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [displayCount, setDisplayCount] = useState(4); // Initial number of articles to display

    useEffect(() => {
        // Fetch message
        fetch(import.meta.env.VITE_api_url_condolence)
            .then(response => response.json())
            .then(data => {
                setMessages(data);
                setLoading(false); // Set loading to false when messages are fetched
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

    const handleLoadMore = () => {
        // Increase the display count to load more comments
        setDisplayCount(displayCount + 4);
    };

  return (
    <div className="lg:col-span-3">
        <div className="grid md:grid-cols-2 gap-4">
            {loading ? (
                <div className="flex justify-center items-center py-4">
                    <span className="loading loading-dots loading-lg text-center text-primary"></span>
                </div>
            ):(
                <>
                    {messages.slice().reverse().slice(0, displayCount).map((message) => (
                        <div className="bg-secondary text-primary py-4 px-8 rounded-3xl " key={message.id}>
                            <div className="flex flex-row justify-between pt-8">
                                <h6 className="font-semibold">{message.full_name}</h6>
                                <span className="text-5xl">&quot;</span>
                            </div>
                            <div className="flex flex-col space-y-8">
                                <p className="text-sm italic">{message.message}</p>
                                <span className="text-5xl">&quot;</span>
                            </div>
                        </div>
                    ))}
                </>
            )}

        </div>

        <div className="text-white font-semibold text-sm text-center py-4">
            {displayCount < messages.length && (
                <button onClick={handleLoadMore} className="bg-primary focus:outline-none focus:ring focus:ring-cyan-300 py-3 px-6 rounded-3xl transition duration-200 transform hover:scale-110">Load More</button>
            )}
        </div>
    </div>
  )
}

export default Condolence