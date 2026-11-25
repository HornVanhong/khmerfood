package com.khmerfood.config;

import com.khmerfood.entity.*;
import com.khmerfood.entity.enums.Difficulty;
import com.khmerfood.entity.enums.RecipeStatus;
import com.khmerfood.repository.CategoryRepository;
import com.khmerfood.repository.IngredientRepository;
import com.khmerfood.repository.RecipeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Component
@Profile("dev")
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final CategoryRepository categoryRepository;
    private final IngredientRepository ingredientRepository;
    private final RecipeRepository recipeRepository;

    public DataInitializer(CategoryRepository categoryRepository,
                           IngredientRepository ingredientRepository,
                           RecipeRepository recipeRepository) {
        this.categoryRepository = categoryRepository;
        this.ingredientRepository = ingredientRepository;
        this.recipeRepository = recipeRepository;
    }

    @Override
    @Transactional
    public void run(String... args) {
        if (categoryRepository.count() > 0) {
            log.info("Dev database already populated. Skipping initialization.");
            return;
        }

        log.info("Populating Dev In-Memory Database with authentic Khmer cuisine data...");

        // Categories
        Category soups = new Category();
        soups.setSlug("soups-curries");
        soups.setImageUrl("https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80");
        soups.setActive(true);
        soups.getTranslations().add(new CategoryTranslation(soups, "km", "ម្ហូបសម្ល", "សម្លប្រពៃណីខ្មែរ រួមមានសម្លកកូរ អាម៉ុក និងការីខ្មែរ"));
        soups.getTranslations().add(new CategoryTranslation(soups, "en", "Soups & Curries", "Traditional Cambodian soups, curries and steamed aromatics"));

        Category stirFried = new Category();
        stirFried.setSlug("stir-fried");
        stirFried.setImageUrl("https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80");
        stirFried.setActive(true);
        stirFried.getTranslations().add(new CategoryTranslation(stirFried, "km", "ម្ហូបឆា", "ម្ហូបឆាក្តៅៗជាមួយគ្រឿងទេសខ្មែរ និងបន្លែស្រស់"));
        stirFried.getTranslations().add(new CategoryTranslation(stirFried, "en", "Stir-Fried Dishes", "Fragrant stir-fries seasoned with Kampot pepper and lemongrass paste"));

        Category grilled = new Category();
        grilled.setSlug("grilled");
        grilled.setImageUrl("https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80");
        grilled.setActive(true);
        grilled.getTranslations().add(new CategoryTranslation(grilled, "km", "ម្ហូបអាំង", "ម្ហូបអាំងឈ្ងុយឆ្ងាញ់ជាមួយទឹកជ្រលក់កោះកុង"));
        grilled.getTranslations().add(new CategoryTranslation(grilled, "en", "Grilled Dishes", "Savory grilled meats and seafood served with authentic dipping sauces"));

        Category riceDishes = new Category();
        riceDishes.setSlug("rice-dishes");
        riceDishes.setImageUrl("https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80");
        riceDishes.setActive(true);
        riceDishes.getTranslations().add(new CategoryTranslation(riceDishes, "km", "ម្ហូបបាយ", "បាយផ្កាម្លិះ និងម្ហូបបាយប្រពៃណីខ្មែរ"));
        riceDishes.getTranslations().add(new CategoryTranslation(riceDishes, "en", "Rice Dishes", "Fragrant jasmine rice specialties and breakfast favorites"));

        Category noodles = new Category();
        noodles.setSlug("noodles");
        noodles.setImageUrl("https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80");
        noodles.setActive(true);
        noodles.getTranslations().add(new CategoryTranslation(noodles, "km", "មី និងគុយទាវ", "គុយទាវភ្នំពេញ នំបញ្ចុក និងមីស៊ុប"));
        noodles.getTranslations().add(new CategoryTranslation(noodles, "en", "Noodles", "Classic noodle soups including Kuy Teav and freshly pressed Nom Banh Chok"));

        Category desserts = new Category();
        desserts.setSlug("desserts");
        desserts.setImageUrl("https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80");
        desserts.setActive(true);
        desserts.getTranslations().add(new CategoryTranslation(desserts, "km", "បង្អែម", "បង្អែមខ្មែរឈ្ងុយខ្ទិះដូង ស្ករត្នោត និងផ្លែឈើស្រស់"));
        desserts.getTranslations().add(new CategoryTranslation(desserts, "en", "Desserts", "Sweet Khmer treats crafted with palm sugar, coconut cream, and ripe fruit"));

        soups = categoryRepository.save(soups);
        stirFried = categoryRepository.save(stirFried);
        grilled = categoryRepository.save(grilled);
        riceDishes = categoryRepository.save(riceDishes);
        noodles = categoryRepository.save(noodles);
        desserts = categoryRepository.save(desserts);

        // Ingredients
        Ingredient fish = new Ingredient();
        fish.setImageUrl("https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80");
        fish.getTranslations().add(new IngredientTranslation(fish, "km", "សាច់ត្រីរ៉ស់ ឬត្រីដំរី"));
        fish.getTranslations().add(new IngredientTranslation(fish, "en", "Freshwater fish fillet"));

        Ingredient kroeung = new Ingredient();
        kroeung.setImageUrl("https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80");
        kroeung.getTranslations().add(new IngredientTranslation(kroeung, "km", "គ្រឿងបុកខ្មែរ (ស្លឹកគ្រៃ រមៀត រំដេង ខ្ទឹមស)"));
        kroeung.getTranslations().add(new IngredientTranslation(kroeung, "en", "Yellow Kroeung paste"));

        Ingredient coconut = new Ingredient();
        coconut.setImageUrl("https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80");
        coconut.getTranslations().add(new IngredientTranslation(coconut, "km", "ខ្ទិះដូងដើម និងចុង"));
        coconut.getTranslations().add(new IngredientTranslation(coconut, "en", "Coconut milk"));

        Ingredient beef = new Ingredient();
        beef.setImageUrl("https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&q=80");
        beef.getTranslations().add(new IngredientTranslation(beef, "km", "សាច់គោផាត់ផុយ"));
        beef.getTranslations().add(new IngredientTranslation(beef, "en", "Beef tenderloin"));

        Ingredient pepper = new Ingredient();
        pepper.setImageUrl("https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80");
        pepper.getTranslations().add(new IngredientTranslation(pepper, "km", "ម្រេចកំពតខ្មៅ"));
        pepper.getTranslations().add(new IngredientTranslation(pepper, "en", "Kampot black pepper"));

        Ingredient pork = new Ingredient();
        pork.setImageUrl("https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80");
        pork.getTranslations().add(new IngredientTranslation(pork, "km", "សាច់ជ្រូកបីជាន់"));
        pork.getTranslations().add(new IngredientTranslation(pork, "en", "Pork belly"));

        Ingredient rice = new Ingredient();
        rice.setImageUrl("https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80");
        rice.getTranslations().add(new IngredientTranslation(rice, "km", "អង្ករផ្កាម្លិះខ្មែរ"));
        rice.getTranslations().add(new IngredientTranslation(rice, "en", "Jasmine rice"));

        Ingredient riceNoodles = new Ingredient();
        riceNoodles.setImageUrl("https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=400&q=80");
        riceNoodles.getTranslations().add(new IngredientTranslation(riceNoodles, "km", "សរសៃគុយទាវ ឬនំបញ្ចុក"));
        riceNoodles.getTranslations().add(new IngredientTranslation(riceNoodles, "en", "Rice noodles"));

        fish = ingredientRepository.save(fish);
        kroeung = ingredientRepository.save(kroeung);
        coconut = ingredientRepository.save(coconut);
        beef = ingredientRepository.save(beef);
        pepper = ingredientRepository.save(pepper);
        pork = ingredientRepository.save(pork);
        rice = ingredientRepository.save(rice);
        riceNoodles = ingredientRepository.save(riceNoodles);

        // Recipe 1: Fish Amok
        Recipe amok = new Recipe();
        amok.setCategory(soups);
        amok.setSlug("fish-amok");
        amok.setMainImageUrl("https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80");
        amok.setPreparationMinutes(25);
        amok.setCookingMinutes(30);
        amok.setServings(4);
        amok.setDifficulty(Difficulty.MEDIUM);
        amok.setStatus(RecipeStatus.PUBLISHED);
        amok.setFeatured(true);
        amok.getTranslations().add(new RecipeTranslation(amok, "km", "អាម៉ុកត្រី", "ម្ហូបតំណាងជាតិខ្មែរ ធ្វើពីត្រីទឹកសាបស្រស់ លាយជាមួយគ្រឿងបុកស្លឹកគ្រៃ និងខ្ទិះដូង ចំហុយក្នុងកន្ទោងស្លឹកចេក។"));
        amok.getTranslations().add(new RecipeTranslation(amok, "en", "Fish Amok", "Cambodia's signature culinary masterpiece: silky steamed freshwater fish curry infused with yellow kroeung, coconut cream, and kaffir lime, cradled in banana leaves."));
        amok.getRecipeIngredients().add(new RecipeIngredient(amok, fish, new BigDecimal("500"), "g", 1));
        amok.getRecipeIngredients().add(new RecipeIngredient(amok, kroeung, new BigDecimal("3"), "tbsp", 2));
        amok.getRecipeIngredients().add(new RecipeIngredient(amok, coconut, new BigDecimal("400"), "ml", 3));

        RecipeStep amokStep1 = new RecipeStep(amok, 1, "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80");
        amokStep1.getTranslations().add(new StepTranslation(amokStep1, "km", "លាងសម្អាតសាច់ត្រីរ៉ស់ឲ្យស្អាត រួចកាត់ជាបន្ទះស្តើងល្មម។"));
        amokStep1.getTranslations().add(new StepTranslation(amokStep1, "en", "Clean and slice the freshwater fish into bite-sized pieces."));
        amok.getSteps().add(amokStep1);

        RecipeStep amokStep2 = new RecipeStep(amok, 2, "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80");
        amokStep2.getTranslations().add(new StepTranslation(amokStep2, "km", "ច្របល់គ្រឿងស្លឹកគ្រៃបុក ខ្ទិះដូង ពងទា និងស្ករត្នោតឲ្យចូលគ្នាសព្វ រួចដាក់សាច់ត្រីចូល។"));
        amokStep2.getTranslations().add(new StepTranslation(amokStep2, "en", "Whisk the yellow kroeung paste with thick coconut milk, egg, and palm sugar, then fold in the fish."));
        amok.getSteps().add(amokStep2);

        RecipeStep amokStep3 = new RecipeStep(amok, 3, "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80");
        amokStep3.getTranslations().add(new StepTranslation(amokStep3, "km", "ដួសដាក់ក្នុងកន្ទោងស្លឹកចេក រួចយកទៅចំហុយរយៈពេល ២០ ទៅ ៣០ នាទីរហូតដល់ឆ្អិនខាប់។"));
        amokStep3.getTranslations().add(new StepTranslation(amokStep3, "en", "Spoon into banana leaf cups and steam for 20-30 minutes until set. Top with coconut cream drizzle."));
        amok.getSteps().add(amokStep3);

        recipeRepository.save(amok);

        // Recipe 2: Beef Lok Lak
        Recipe loklak = new Recipe();
        loklak.setCategory(stirFried);
        loklak.setSlug("beef-lok-lak");
        loklak.setMainImageUrl("https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80");
        loklak.setPreparationMinutes(20);
        loklak.setCookingMinutes(15);
        loklak.setServings(3);
        loklak.setDifficulty(Difficulty.EASY);
        loklak.setStatus(RecipeStatus.PUBLISHED);
        loklak.setFeatured(true);
        loklak.getTranslations().add(new RecipeTranslation(loklak, "km", "ឡុកឡាក់សាច់គោ", "សាច់គោឆាក្តៅៗរសជាតិដិត ញ៉ាំជាមួយសាឡាត់ ប៉េងប៉ោះ ខ្ទឹមបារាំង និងទឹកជ្រលក់អំបិលម្រេចក្រូចឆ្មា។"));
        loklak.getTranslations().add(new RecipeTranslation(loklak, "en", "Beef Lok Lak", "Caramelized stir-fried beef cubes served over crisp lettuce, cucumber, and fresh tomatoes, paired with a zesty lime and Kampot black pepper dip."));
        loklak.getRecipeIngredients().add(new RecipeIngredient(loklak, beef, new BigDecimal("400"), "g", 1));
        loklak.getRecipeIngredients().add(new RecipeIngredient(loklak, pepper, new BigDecimal("1"), "tbsp", 2));

        RecipeStep loklakStep1 = new RecipeStep(loklak, 1, "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80");
        loklakStep1.getTranslations().add(new StepTranslation(loklakStep1, "km", "កាត់សាច់គោជាដុំតូចៗ រួចប្រឡាក់ជាមួយប្រេងខ្យង ទឹកស៊ីអ៊ីវ ខ្ទឹមស និងស្ករត្នោត ២០ នាទី។"));
        loklakStep1.getTranslations().add(new StepTranslation(loklakStep1, "en", "Dice beef and marinate with soy sauce, oyster sauce, minced garlic, and palm sugar for 20 minutes."));
        loklak.getSteps().add(loklakStep1);

        RecipeStep loklakStep2 = new RecipeStep(loklak, 2, "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80");
        loklakStep2.getTranslations().add(new StepTranslation(loklakStep2, "km", "ដាក់ខ្ទះឲ្យក្តៅខ្លាំង រួចឆាសាច់គោឲ្យឆ្អិនស្រួយក្រៅ លើកដាក់លើចានដែលមានបន្លែ និងទឹកម្រេចក្រូចឆ្មា។"));
        loklakStep2.getTranslations().add(new StepTranslation(loklakStep2, "en", "Sear over high heat for 2-3 minutes. Serve over fresh salad with lime-pepper dip."));
        loklak.getSteps().add(loklakStep2);

        recipeRepository.save(loklak);

        // Recipe 3: Samlor Korko
        Recipe korko = new Recipe();
        korko.setCategory(soups);
        korko.setSlug("samlor-korko");
        korko.setMainImageUrl("https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80");
        korko.setPreparationMinutes(30);
        korko.setCookingMinutes(40);
        korko.setServings(5);
        korko.setDifficulty(Difficulty.HARD);
        korko.setStatus(RecipeStatus.PUBLISHED);
        korko.setFeatured(true);
        korko.getTranslations().add(new RecipeTranslation(korko, "km", "សម្លកកូរ", "សម្លប្រពៃណីខ្មែរបុរាណសម្បូរដោយបន្លែចម្រុះជាច្រើនមុខ អង្ករលីង និងត្រីរ៉ស់ស្រស់។"));
        korko.getTranslations().add(new RecipeTranslation(korko, "en", "Samlor Korko", "Cambodia's hearty royal vegetable stew cooked with roasted pounded rice, aromatic herbs, local river fish, and garden greens."));
        korko.getRecipeIngredients().add(new RecipeIngredient(korko, fish, new BigDecimal("400"), "g", 1));
        korko.getRecipeIngredients().add(new RecipeIngredient(korko, kroeung, new BigDecimal("3"), "tbsp", 2));
        recipeRepository.save(korko);

        // Recipe 4: Nom Banh Chok
        Recipe banhChok = new Recipe();
        banhChok.setCategory(noodles);
        banhChok.setSlug("nom-banh-chok");
        banhChok.setMainImageUrl("https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80");
        banhChok.setPreparationMinutes(40);
        banhChok.setCookingMinutes(35);
        banhChok.setServings(4);
        banhChok.setDifficulty(Difficulty.HARD);
        banhChok.setStatus(RecipeStatus.PUBLISHED);
        banhChok.setFeatured(true);
        banhChok.getTranslations().add(new RecipeTranslation(banhChok, "km", "នំបញ្ចុកទឹកសម្លប្រហើរ", "នំបញ្ចុកស្រស់ស្រូបជាមួយទឹកសម្លប្រហើរត្រីរ៉ស់បុកជាមួយគ្រឿងស្លឹកគ្រៃ និងបន្លែស្រស់ៗ។"));
        banhChok.getTranslations().add(new RecipeTranslation(banhChok, "en", "Nom Banh Chok", "Iconic Khmer breakfast noodles bathed in a fragrant, golden river-fish and lemongrass broth, garnished with edible flowers and water celery."));
        banhChok.getRecipeIngredients().add(new RecipeIngredient(banhChok, riceNoodles, new BigDecimal("500"), "g", 1));
        banhChok.getRecipeIngredients().add(new RecipeIngredient(banhChok, fish, new BigDecimal("300"), "g", 2));
        recipeRepository.save(banhChok);

        // Recipe 5: Kuy Teav Phnom Penh
        Recipe kuyTeav = new Recipe();
        kuyTeav.setCategory(noodles);
        kuyTeav.setSlug("kuy-teav-phnom-penh");
        kuyTeav.setMainImageUrl("https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80");
        kuyTeav.setPreparationMinutes(30);
        kuyTeav.setCookingMinutes(120);
        kuyTeav.setServings(4);
        kuyTeav.setDifficulty(Difficulty.MEDIUM);
        kuyTeav.setStatus(RecipeStatus.PUBLISHED);
        kuyTeav.setFeatured(true);
        kuyTeav.getTranslations().add(new RecipeTranslation(kuyTeav, "km", "គុយទាវភ្នំពេញ", "ស៊ុបគុយទាវរសជាតិផ្អែមជាប់មាត់ពីឆ្អឹងជ្រូករម្ងាស់យូរ ជាមួយប្រហិត សាច់ជ្រូក និងបង្គាស្រស់។"));
        kuyTeav.getTranslations().add(new RecipeTranslation(kuyTeav, "en", "Phnom Penh Noodle Soup (Kuy Teav)", "A comforting, slow-simmered pork bone and dried seafood broth poured over delicate rice noodles, tender slices of pork, minced pork, and fresh herbs."));
        kuyTeav.getRecipeIngredients().add(new RecipeIngredient(kuyTeav, riceNoodles, new BigDecimal("500"), "g", 1));
        kuyTeav.getRecipeIngredients().add(new RecipeIngredient(kuyTeav, pork, new BigDecimal("300"), "g", 2));
        recipeRepository.save(kuyTeav);

        // Recipe 6: Bai Sach Chrouk
        Recipe baiSachChrouk = new Recipe();
        baiSachChrouk.setCategory(riceDishes);
        baiSachChrouk.setSlug("bai-sach-chrouk");
        baiSachChrouk.setMainImageUrl("https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80");
        baiSachChrouk.setPreparationMinutes(25);
        baiSachChrouk.setCookingMinutes(20);
        baiSachChrouk.setServings(2);
        baiSachChrouk.setDifficulty(Difficulty.EASY);
        baiSachChrouk.setStatus(RecipeStatus.PUBLISHED);
        baiSachChrouk.setFeatured(true);
        baiSachChrouk.getTranslations().add(new RecipeTranslation(baiSachChrouk, "km", "បាយសាច់ជ្រូក", "បាយពេលព្រឹកបែបខ្មែរ សាច់ជ្រូកប្រឡាក់ខ្ទិះដូងអាំងឈ្ងុយលើធ្យូង ញ៉ាំជាមួយជ្រក់ត្រសក់។"));
        baiSachChrouk.getTranslations().add(new RecipeTranslation(baiSachChrouk, "en", "Bai Sach Chrouk", "Beloved morning staple: tender pork marinated in coconut milk and garlic, slowly char-grilled and served over steamed jasmine rice with quick-pickled cucumbers."));
        baiSachChrouk.getRecipeIngredients().add(new RecipeIngredient(baiSachChrouk, pork, new BigDecimal("350"), "g", 1));
        baiSachChrouk.getRecipeIngredients().add(new RecipeIngredient(baiSachChrouk, rice, new BigDecimal("300"), "g", 2));
        recipeRepository.save(baiSachChrouk);

        log.info("Dev in-memory database successfully initialized with authentic Cambodian dishes!");
    }
}
