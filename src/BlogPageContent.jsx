import Image from "next/image";
import React from "react";
import BlogFeaturedImg from "./blog-featured-image.jpg";
import AuthorImg from "./blog-author-img.jpg";

function BlogPageContent() {
    return (
        <>
            <section name="blog">
                <div className="container">
                    <div className="py-xl-3 py-lg-3 py-md-3 py-sm-2 border-bottom border-4 border-dark blog-header">
                        <p className="h1 font-weight-normal text-uppercase blog-title">
                            Women in Technology World Series Comes to Houston in 2022
                        </p>
                        <div className="d-flex my-1">
                            <p className="px-2 font-weight-normal text-capitalize blog-header-author-name">Noah Fons</p>
                            <p className="px-2 font-weight-normal text-capitalize blog-header-date">April 21, 2022</p>
                        </div>
                    </div>
                    <div className="container py-3 text-center blog-featured-image">
                        <Image src={BlogFeaturedImg} />
                    </div>
                    <div className="m-auto py-4 blog-content">
                        <p className="font-weight-normal blog-content-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit consectetur dignissimos omnis ex consequatur totam unde vitae similique quaerat culpa mollitia aut, atque sit recusandae numquam voluptate explicabo eos reprehenderit sapiente. Necessitatibus soluta itaque dolorum praesentium mollitia, quibusdam nulla! Voluptatem quisquam possimus dolores asperiores iusto? Ab alias deserunt possimus eum, magni necessitatibus consectetur voluptatum doloremque qui non officia praesentium adipisci deleniti, repellat exercitationem mollitia, eveniet dolor iusto iure quo! Alias reiciendis accusantium iusto sit iste, amet aut quam veritatis similique magni fugit quis asperiores adipisci, tenetur ea aperiam quisquam illo debitis corporis accusamus, provident exercitationem optio? Odio, ad optio, reprehenderit sit illo minima obcaecati voluptate praesentium dignissimos, maxime maiores explicabo? Totam culpa vitae fuga minus, corrupti laboriosam commodi neque perferendis architecto, repudiandae, praesentium quae? Modi eveniet sed quis cum rem laudantium ducimus voluptatum maiores libero illum, in aliquid eos fugiat aspernatur vitae asperiores laboriosam fugit numquam praesentium natus. Autem quae quam, rerum dignissimos quisquam quo. Quisquam, suscipit cumque aut quos omnis illum molestiae ipsum fuga corporis rem totam itaque fugiat doloremque quam. Maxime, ea hic et, minima vitae enim eligendi quibusdam quod commodi voluptatum magni, architecto sint ab quas earum atque fugiat non id blanditiis nam numquam. Aperiam tempora commodi minus porro laudantium nesciunt, harum quod cumque vero, minima distinctio eaque recusandae quam ea aspernatur esse similique tenetur omnis, quisquam ipsa facere ipsam et error ullam? Ratione quasi accusantium qui, maxime nesciunt ad illo, sequi dolore dolorum nisi tenetur excepturi consequatur aut necessitatibus voluptas at quas sapiente quo. Aperiam neque, perspiciatis tempora ratione illum accusamus quo deleniti sunt saepe aut natus placeat quos cupiditate quasi porro, aspernatur libero. Saepe nulla perspiciatis sequi cumque a unde at quaerat. Voluptatum dignissimos consequatur, reprehenderit facere eligendi cum iste facilis. Fugit voluptatum dignissimos maxime deleniti! Accusamus beatae nobis debitis ipsum modi fugit eveniet asperiores quod ratione ut mollitia magni voluptatibus vitae quasi ipsa voluptatum in perspiciatis, fuga possimus veritatis sapiente id totam iusto? Necessitatibus perspiciatis id quia iusto quaerat illum alias officia nostrum obcaecati ipsa, ipsam voluptatibus nobis dolorem aliquid velit sunt similique molestiae, quidem illo ad eaque. Aspernatur nulla veritatis iure distinctio similique ratione, tempore eaque reprehenderit veniam corrupti suscipit aliquam est hic dolor dolorem porro ipsam dolore ea officiis reiciendis temporibus accusantium! Ex corrupti voluptatem consectetur eaque aperiam ab. Odio repellendus exercitationem ipsa asperiores quae delectus consequuntur iste, numquam neque amet sit magni nobis adipisci laborum perferendis, quasi, consequatur assumenda sequi? Ex, ab earum? Ea, aliquid! Qui atque odit quaerat magni excepturi dolorem velit quos dolor expedita, incidunt tempora ipsa quae perspiciatis facere! Asperiores accusantium, aperiam eligendi quaerat optio qui, officia dolor quisquam, error perferendis blanditiis vel modi itaque iure repellat! Id eveniet, corporis similique sunt vel dignissimos nesciunt ex et quod architecto vero debitis cumque reprehenderit laborum quibusdam, velit accusantium quidem laboriosam natus culpa. Porro repellendus quidem molestiae, repudiandae quas necessitatibus illum enim error architecto esse eius modi quasi. Eligendi beatae dolorem velit asperiores autem quidem, sequi cum? Exercitationem officiis dolore fugit fugiat repellat corporis ad quas saepe velit error.
                        </p>
                    </div>
                    <div className="d-flex border-top border-4 border-dark py-4 blog-author">
                        <div className="blog-author-img">
                            <Image src={AuthorImg} className="rounded-circle" />
                        </div>
                        <div className="ms-3 m-auto">
                            <p className="blog-author-name">
                                Joao Vasconcelos
                            </p>
                            <p className="blog-author-description">
                                Joao is the Lead Producer of Women in Technology Texas and a Senior Content Producer at Ascend Global Media, creators and organizers of the Women in Technology World Series where Joao leads the research and development of the USA portfolio with events in San Francisco, Houston and Boston.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPageContent;