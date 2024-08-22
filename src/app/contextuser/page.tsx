'use client';
import PageLayout from '../../Components/PageLayout/PageLayout';
import { useTheme } from '@/Components/ThemeProvider/ThemeProvider';
import styles from './contextuser.module.css';
import { useCount } from '@/Components/CounterProvider/CounterProvider';

const ContextUser = () => {
    const themeContext = useTheme();
    const {addCount, minusCount, count} = useCount();

    return (
        <PageLayout>
            <h1>Page using Context</h1>
            <p>Click the Button below and it will trigger a function that is held in context</p>
            <p>Color from context = {JSON.stringify(themeContext.colors.primary)}</p>
            <button className={styles['context-button']} onClick={themeContext.testAction}>
                Click to trigger Provider function
            </button>
            <div className={styles['count-example-container']}>
                <h2>Page Counter using Context</h2>
                <p>Page Counter click the buttons below to incremenet and decrement the count</p>
                <h2>COUNT = {count}</h2>
        
                <button className={styles['context-button']} onClick={minusCount}>
                    (-) Subtract
                </button>

                <button className={styles['context-button']} onClick={addCount}>
                    (+) Add
                </button>
            </div>


        </PageLayout>
    )
}

export default ContextUser;