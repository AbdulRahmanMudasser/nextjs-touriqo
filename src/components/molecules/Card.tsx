export default function Card({ title, description }: { title: string; description: string }) {
    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md transition">
            <h2 className="text-lg font-semibold dark:text-white">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    );
}
