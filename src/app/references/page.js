// src/app/references/page.js
'use client'; 

import styles from '@/styles/References.module.css';
import AnimatedSection from '@/components/AnimatedSection';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaExternalLinkAlt } from "react-icons/fa";

export default function References() {
    const router = useRouter();

    useEffect(() => {
        
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.classList.add(styles.highlight);
                
                
                setTimeout(() => {
                    element.classList.remove(styles.highlight);
                }, 3000);
            }
        }
    }, [router.asPath]);

    return (
        <div className={styles.referencesContainer}>
            <AnimatedSection>
                <section className={styles.references}>
                    <h2>References</h2>
                    {/* Go Back Button */}
                    <button className={styles.goBackButton} onClick={() => router.back()}>
                        &larr; Go Back
                    </button>
                    <ul>
                        <li id="cite1">
                            Borg, Anton, and Martin Boldt. “Using VADER Sentiment and SVM for Predicting Customer Response Sentiment.” <em>Expert Systems with Applications,</em> vol. 162, 2020. https://doi.org/10.1016/j.eswa.2020.113746.
                            <a href="https://doi.org/10.1016/j.eswa.2020.113746" className={styles.referenceLink} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt />
                            </a>
                        </li>
                        <li id="cite2">
                            Eisenhauer, Karen. “A Quantitative Analysis of Directives in Disney Princess Films.” <em>Capstone project, North Carolina State University,</em> 2017. www.kareneisenhauer.org/wp-content/uploads/2017/06/Eisenhauer-Capstone-Excerpt.pdf. Accessed 5 Nov. 2024.
                            <a href="https://www.kareneisenhauer.org/wp-content/uploads/2017/06/Eisenhauer-Capstone-Excerpt.pdf" className={styles.referenceLink} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt />
                            </a>
                        </li>
                        <li id="cite3">
                            England, Dawn Elizabeth, et al. “Gender Role Portrayal and the Disney Princesses.” <em>Sex Roles, A Journal of Research,</em> vol. 64, no. 7–8, 2011, pp. 555–67, https://doi.org/10.1007/s11199-011-9930-7.
                            <a href="https://doi.org/10.1007/s11199-011-9930-7" className={styles.referenceLink} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt />
                            </a>
                        </li>
                        <li id="cite4">
                            Hutto, C., and Eric Gilbert. “Vader: A Parsimonious Rule-Based Model for Sentiment Analysis of Social Media Text.” <em>Proceedings of the International AAAI Conference on Web and Social Media.</em> ojs.aaai.org/index.php/icwsm/article/view/14550.
                            <a href="https://ojs.aaai.org/index.php/ICWSM/article/view/14550/14399" className={styles.referenceLink} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt />
                            </a>
                        </li>
                        <li id="cite5">
                            Ravi, Kumar, and Vadlamani Ravi. “A Survey on Opinion Mining and Sentiment Analysis: Tasks, Approaches and Applications.” <em>Knowledge-Based Systems,</em> vol. 89, 2015, pp. 14–46 https://doi.org/10.1016/j.knosys.2015.06.015
                            <a href="https://doi.org/10.1016/j.knosys.2015.06.015" className={styles.referenceLink} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt />
                            </a>
                        </li>
                        <li id="cite6">
                            Ouyang, Karen. “Once upon a Time- NLP on Disney Movie Scripts & Their Original Stories.” <em>Medium,</em> 7 Sept. 2019, medium.com/@karenouyang93/once-upon-a-time-nlp-on-disney-movie-scripts-their-original-stories-3fcdadf8c418. Accessed 11 Nov. 2024.
                            <a href="https://medium.com/@karenouyang93/once-upon-a-time-nlp-on-disney-movie-scripts-their-original-stories-3fcdadf8c418" className={styles.referenceLink} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt />
                            </a>
                        </li>
                    </ul>

                    <button className={styles.goBackButton} onClick={() => router.back()}>
                        &larr; Go Back
                    </button>
                </section>
            </AnimatedSection>
        </div>
    );
}
