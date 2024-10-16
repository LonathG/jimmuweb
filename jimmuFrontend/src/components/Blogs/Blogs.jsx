import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons
import Card from '../BlogCard/BlogCard';
import './Blogs.css';
import img1 from '../../assets/images/jnyAmbr.png';
import img2 from '../../assets/images/Shoaib.jpg';
import img3 from '../../assets/images/haya.jpg';
import img4 from '../../assets/images/bill.png';
import img5 from '../../assets/images/126img.jpg';
const Blogs = () => {
    const cardsData =[
      {
        "imageUrl": `${img1}`,
        "title": "How the Johnny Depp and Amber Heard Divorce Highlights the Complexities of High Net Worth Divorces",
        "date": "15 October 2024",
        "content": "The highly publicized divorce between Johnny Depp and Amber Heard provides a striking example of the complexities that come with high net worth (HNW) divorces. With both parties amassing significant wealth from their respective acting careers, the legal proceedings involved more than just emotional struggles—it became a battle over substantial assets, including properties, luxury goods, and intellectual property rights. This case serves as a reminder of the unique challenges HNW individuals face when navigating the legal and financial intricacies of asset division.\n\nIn the Depp-Heard divorce, one of the primary issues was the valuation and division of high-value items such as properties, vehicles, and luxury collectibles. When large estates and significant assets are on the line, as in this case, both parties must ensure full transparency to avoid hidden debts or undervalued assets. For HNW individuals, using warranty documents can help safeguard key financial interests. These agreements ensure that third-party liabilities are properly accounted for and that no hidden financial obligations affect the final settlement.\n\nWarranty documents can also act as protection against asset manipulation during the divorce process. They ensure that all debts are disclosed and that any loans or liabilities connected to valuable assets are transparent. Without these legal safeguards, HNW individuals like Depp or Heard risk losing significant wealth due to unexpected financial claims or asset devaluation during contentious proceedings.\n\nThe Depp-Heard case also highlights the need for comprehensive legal and financial strategies to protect against undervaluation or fraudulent asset disclosures. By implementing tools such as warranties, individuals involved in high-stakes separations can better protect their wealth and secure a fair and transparent division of assets. The Johnny Depp and Amber Heard divorce serves as a cautionary tale, showcasing the importance of financial diligence and legal safeguards in preserving wealth during a complex, high-net-worth separation."
      },
      
      // {
      //   "imageUrl": `${img2}`,
      //   "title": "High-Profile Divorce: Shoaib Malik and Sania Mirza's Split Amidst Rumors and Legal Proceedings",
      //   "date": "15 October 2024",
      //   "content": "The divorce between former Pakistan cricket captain Shoaib Malik and tennis star Sania Mirza has become one of the most high-profile separations in recent times. Their relationship, once celebrated as a union between two sporting icons from Pakistan and India, has now ended in a highly publicized divorce, which continues to shock fans across both countries. Rumors of their separation had been circulating for some time, but it wasn’t until Sania Mirza’s family confirmed that she had been granted 'Khula,' a form of unilateral divorce in Islamic law, that the news was made official.\n\nShoaib Malik, who has a net worth of approximately ₹230 crore, and Sania Mirza, with a net worth of ₹216 crore, both have significant financial stakes. Their divorce brings up critical questions about the financial settlement, as their combined fortunes make this one of the most high-stakes divorces in the sports world. Although specific details about the amount Shoaib will pay Sania post-divorce remain undisclosed, speculation continues to swirl around the potential settlement, considering their high net worth.\n\nThe divorce has also sparked interest in how assets will be divided, as both Shoaib and Sania own significant properties, luxury goods, and other financial investments. Sania Mirza, a tennis legend in her own right, has earned millions from her sporting career, endorsements, and business ventures, while Shoaib Malik’s earnings from cricket and endorsements make him a significant figure in Pakistan's sports industry. The legal and financial proceedings in this case are likely to be intricate, with both sides potentially negotiating asset division and alimony based on their substantial wealth.\n\nFurthermore, Shoaib Malik's decision to marry Pakistani TV actress Sana Javed shortly after his divorce from Sania Mirza added another layer of public intrigue, fueling even more speculation about the reasons behind the split. While both parties have maintained their privacy during this challenging time, the Shoaib-Sania divorce serves as a reminder of the complexities involved in high-net-worth separations, particularly when public figures are involved."
      // },
      // {
      //   "imageUrl": `${img3}`,
      //   "title": "The High-Stakes Divorce of Sheikh Mohammed bin Rashid al-Maktoum and Princess Haya: A Case of Wealth, Allegations, and Protection",
      //   "date": "15 October 2024",
      //   "content": "One of the most high-profile and costly divorces in recent history was between Dubai's ruler Sheikh Mohammed bin Rashid al-Maktoum and his ex-wife, Princess Haya bint al-Hussein, in December 2021. The divorce settlement, reported by CNN, made headlines around the world as Sheikh Mohammed was ordered to pay a record-breaking $728 million. This amount was meant to cover Princess Haya’s security costs for the rest of her life, as well as the ongoing financial needs of their two children, Al Jalila Bint Mohammed Bin Rashid Al Maktoum and Sheikh Zayed Bin Mohammed Bin Rashid Al Maktoum.\n\nThe divorce case, however, was far from straightforward. The court proceedings revealed a deep, personal conflict, with accusations of alleged affairs and serious threats, which resulted in the legal battle dragging on for years. Princess Haya, daughter of the late King Hussein of Jordan, initially fled to the UK in 2019 with her two children, citing concerns for her safety. In the court filings, Princess Haya accused Sheikh Mohammed of orchestrating a campaign of intimidation, including threats and coercion, which played a significant role in the prolonged legal fight.\n\nThe court’s judgment reflected not only the financial clout of both parties but also the need for Princess Haya’s personal protection. A significant portion of the settlement was allocated to security measures, given the alleged threats and fears for her and her children's safety. This level of financial settlement and protection is rare, even among the wealthiest individuals, but the case highlights the intersection of vast wealth, personal security, and international legal battles.\n\nFor Sheikh Mohammed, one of the wealthiest and most influential figures in the Middle East, the divorce was a significant public affair that attracted global attention. The case illustrated how high-net-worth divorces often involve more than just financial settlements—they can also reflect deep personal and security concerns. Princess Haya’s victory in court marks a rare instance of a royal spouse securing such a large financial and protective package post-divorce, showcasing the unique complexities involved in divorces at this level."
      // },
      {
        "imageUrl": `${img4}`,
        "title": "The Separation of Bill Gates and Melinda French Gates: Philanthropy, Wealth, and a Private Settlement",
        "date": "20 October 2024",
        "content": "On May 2, 2021, the world was taken by surprise when Bill Gates, Microsoft co-founder and billionaire philanthropist, and his wife Melinda French Gates announced their separation after 27 years of marriage. The ex-couple, who had been one of the most influential pairs in philanthropy, issued a statement confirming their commitment to continue running their foundation, the Gates Foundation, which boasts a $40 billion endowment. Despite their split, the Gates' stated they would remain partners in their charitable efforts.\n\nOne of the most remarkable aspects of their divorce was the lack of a prenuptial agreement. However, the court documents revealed that they had a private separation agreement, which likely helped avoid a public courtroom battle over their multi-billion-dollar estate. Bill Gates, whose net worth at the time exceeded $130.5 billion, and Melinda shared ownership of multiple properties worth millions of dollars, which were presumably addressed in this private agreement. Despite the complexity of their wealth, the couple's focus on amicably continuing their philanthropic work garnered respect and interest from the public.\n\nAs parents to three children, Bill and Melinda also sought to maintain stability for their family throughout the separation. The Gates divorce, while surprising, demonstrated how even high-profile separations can be managed with discretion, particularly when substantial wealth and public interests are involved."
      },
      // {
      //   "imageUrl": "https://example.com/madonna-guy-ritchie-divorce.jpg",
      //   "title": "Madonna and Guy Ritchie: A High-Profile Divorce and Custody Battle",
      //   "date": "25 October 2024",
      //   "content": "The divorce of pop icon Madonna and British filmmaker Guy Ritchie in 2008 was one of the most expensive and contentious separations of the time. Married in 2000, the couple had an eight-year union before deciding to part ways. Reports indicated that Madonna paid Guy Ritchie between $76 million to $92 million as part of their divorce settlement, making it one of the costliest divorces in the entertainment industry.\n\nHowever, the financial settlement wasn’t the only point of contention. The couple became embroiled in a highly publicized custody battle over their son, Rocco Ritchie. The disagreements over where Rocco would live—between Madonna’s fast-paced life in the U.S. and Ritchie’s more grounded lifestyle in the UK—drew significant media attention. Rocco ultimately chose to live with his father in London, adding another layer of complexity to their divorce.\n\nMadonna and Guy’s divorce exemplified the challenges that arise in high-net-worth separations, where not only financial assets but family dynamics become highly scrutinized. Despite their tumultuous split, both Madonna and Ritchie have since moved on, with each of them remarrying and focusing on their respective careers and personal lives."
      // },
      // {
      //   "imageUrl": "https://example.com/jeff-bezos-mackenzie-scott-divorce.jpg",
      //   "title": "Jeff Bezos and Mackenzie Scott: A Billion-Dollar Divorce and Philanthropic Impact",
      //   "date": "30 October 2024",
      //   "content": "The divorce of Amazon founder Jeff Bezos and novelist-philanthropist Mackenzie Scott in April 2019 was one of the most significant and expensive in history. As the richest man in the world at the time, Bezos' divorce settlement attracted worldwide attention, particularly due to the enormous wealth involved. After finalizing their divorce, Mackenzie Scott received $36 billion in Amazon stock, instantly making her one of the wealthiest women in the world.\n\nDespite the substantial financial settlement, the divorce was conducted relatively amicably. Both Jeff and Mackenzie issued public statements affirming their respect for one another and their shared role as co-parents to their four children. Jeff retained control over Amazon, while Mackenzie focused on her philanthropic efforts, quickly becoming one of the most generous donors in history.\n\nBy June 2020, Scott had donated over $1.7 billion to various charitable organizations, ranging from racial justice initiatives to public health causes. Her rapid rise as a philanthropic force continues to shape her post-divorce legacy, and her ongoing contributions have made her one of the most respected philanthropists globally. Jeff Bezos, meanwhile, remains focused on his business ventures, including Amazon and his space exploration company, Blue Origin, cementing his status as a dominant figure in global commerce and technology."
      // }
      
      ]

;

    // Function to scroll left
    const handleScrollLeft = () => {
        const scroller = document.querySelector('.horizontal-scroller');
        scroller.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust the scroll distance as needed
    };

    // Function to scroll right
    const handleScrollRight = () => {
        const scroller = document.querySelector('.horizontal-scroller');
        scroller.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the scroll distance as needed
    };

    return (
        <section id='Blogs'>
        <div className="blogs-container">
            <h2 className='text-[30px] mt-10 font-bold'>Blogs</h2>
            <div className="scroll-buttons">
                <button className="scroll-button" onClick={handleScrollLeft}>
                    <FaChevronLeft />
                </button>
                <button className="scroll-button" onClick={handleScrollRight}>
                    <FaChevronRight />
                </button>
            </div>
            <div className="horizontal-scroller">
                {cardsData.map((card, index) => (
                    <div className="card2" key={index}>
                        <Card
                            imageUrl={card.imageUrl}
                            title={card.title}
                            date={card.date}
                            excerpt={card.content}
                        />
                    </div>
                ))}
            </div>
        </div>
        </section> 
    );
};

export default Blogs;
