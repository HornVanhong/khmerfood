-- Seed Categories
INSERT INTO categories (id, slug, image_url, is_active) VALUES
('c0000000-0000-0000-0000-000000000001', 'soups-curries', 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', true),
('c0000000-0000-0000-0000-000000000002', 'stir-fried', 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', true),
('c0000000-0000-0000-0000-000000000003', 'grilled', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', true),
('c0000000-0000-0000-0000-000000000004', 'rice-dishes', 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80', true),
('c0000000-0000-0000-0000-000000000005', 'noodles', 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80', true),
('c0000000-0000-0000-0000-000000000006', 'desserts', 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80', true);

-- Category Translations
INSERT INTO category_translations (category_id, locale, name, description) VALUES
('c0000000-0000-0000-0000-000000000001', 'km', 'ម្ហូបសម្ល', 'សម្លប្រពៃណីខ្មែរ រួមមានសម្លកកូរ អាម៉ុក និងការីខ្មែរ'),
('c0000000-0000-0000-0000-000000000001', 'en', 'Soups & Curries', 'Traditional Cambodian soups, curries and steamed aromatics like Fish Amok'),
('c0000000-0000-0000-0000-000000000002', 'km', 'ម្ហូបឆា', 'ម្ហូបឆាក្តៅៗជាមួយគ្រឿងទេសខ្មែរ និងបន្លែស្រស់'),
('c0000000-0000-0000-0000-000000000002', 'en', 'Stir-Fried Dishes', 'Fragrant stir-fries seasoned with Kampot pepper and lemongrass paste'),
('c0000000-0000-0000-0000-000000000003', 'km', 'ម្ហូបអាំង', 'ម្ហូបអាំងឈ្ងុយឆ្ងាញ់ជាមួយទឹកជ្រលក់កោះកុង ឬទឹកត្រីកោះកុង'),
('c0000000-0000-0000-0000-000000000003', 'en', 'Grilled Dishes', 'Savory grilled meats and seafood served with authentic dipping sauces'),
('c0000000-0000-0000-0000-000000000004', 'km', 'ម្ហូបបាយ', 'បាយផ្កាម្លិះ និងម្ហូបបាយប្រពៃណីខ្មែរ'),
('c0000000-0000-0000-0000-000000000004', 'en', 'Rice Dishes', 'Fragrant jasmine rice specialties and breakfast favorites'),
('c0000000-0000-0000-0000-000000000005', 'km', 'មី និងគុយទាវ', 'គុយទាវភ្នំពេញ នំបញ្ចុក និងមីស៊ុប'),
('c0000000-0000-0000-0000-000000000005', 'en', 'Noodles', 'Classic noodle soups including Kuy Teav and freshly pressed Nom Banh Chok'),
('c0000000-0000-0000-0000-000000000006', 'km', 'បង្អែម', 'បង្អែមខ្មែរឈ្ងុយខ្ទិះដូង ស្ករត្នោត និងផ្លែឈើស្រស់'),
('c0000000-0000-0000-0000-000000000006', 'en', 'Desserts', 'Sweet Khmer treats crafted with palm sugar, coconut cream, and ripe fruit');

-- Key Ingredients
INSERT INTO ingredients (id, image_url) VALUES
('i0000000-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80'), -- Fish fillets
('i0000000-0000-0000-0000-000000000002', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80'), -- Kroeung (lemongrass paste)
('i0000000-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80'), -- Coconut milk
('i0000000-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&q=80'), -- Beef tenderloin
('i0000000-0000-0000-0000-000000000005', 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80'), -- Kampot black pepper
('i0000000-0000-0000-0000-000000000006', 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=400&q=80'), -- Pork belly
('i0000000-0000-0000-0000-000000000007', 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80'), -- Jasmine rice
('i0000000-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=400&q=80'), -- Rice noodles
('i0000000-0000-0000-0000-000000000009', 'https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?auto=format&fit=crop&w=400&q=80'), -- Fermented fish paste (Prahok)
('i0000000-0000-0000-0000-000000000010', 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=400&q=80'), -- Tamarind pulp
('i0000000-0000-0000-0000-000000000011', 'https://images.unsplash.com/photo-1506802913710-40e2e66339c9?auto=format&fit=crop&w=400&q=80'), -- Eggplant
('i0000000-0000-0000-0000-000000000012', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80'), -- Baguette (Nom Pang)
('i0000000-0000-0000-0000-000000000013', 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=400&q=80'), -- Pumpkin (Lapov)
('i0000000-0000-0000-0000-000000000014', 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=400&q=80'); -- Palm sugar

-- Ingredient Translations
INSERT INTO ingredient_translations (ingredient_id, locale, name) VALUES
('i0000000-0000-0000-0000-000000000001', 'km', 'សាច់ត្រីរ៉ស់ ឬត្រីដំរី'),
('i0000000-0000-0000-0000-000000000001', 'en', 'Freshwater fish fillet (Snakehead or Catfish)'),
('i0000000-0000-0000-0000-000000000002', 'km', 'គ្រឿងបុកខ្មែរ (ស្លឹកគ្រៃ រមៀត រំដេង ខ្ទឹមស)'),
('i0000000-0000-0000-0000-000000000002', 'en', 'Yellow Kroeung (lemongrass, galangal, turmeric paste)'),
('i0000000-0000-0000-0000-000000000003', 'km', 'ខ្ទិះដូងដើម និងចុង'),
('i0000000-0000-0000-0000-000000000003', 'en', 'Rich coconut milk & cream'),
('i0000000-0000-0000-0000-000000000004', 'km', 'សាច់គោផាត់ផុយ'),
('i0000000-0000-0000-0000-000000000004', 'en', 'Tender beef sirloin or tenderloin'),
('i0000000-0000-0000-0000-000000000005', 'km', 'ម្រេចកំពតខ្មៅ ឬក្រហម'),
('i0000000-0000-0000-0000-000000000005', 'en', 'Kampot crushed black pepper'),
('i0000000-0000-0000-0000-000000000006', 'km', 'សាច់ជ្រូកបីជាន់'),
('i0000000-0000-0000-0000-000000000006', 'en', 'Pork belly / sliced pork'),
('i0000000-0000-0000-0000-000000000007', 'km', 'អង្ករផ្កាម្លិះខ្មែរ'),
('i0000000-0000-0000-0000-000000000007', 'en', 'Cambodian fragrant jasmine rice'),
('i0000000-0000-0000-0000-000000000008', 'km', 'សរសៃគុយទាវ ឬនំបញ្ចុក'),
('i0000000-0000-0000-0000-000000000008', 'en', 'Fresh rice noodles'),
('i0000000-0000-0000-0000-000000000009', 'km', 'ប្រហុកខ្មែរប្រណិត'),
('i0000000-0000-0000-0000-000000000009', 'en', 'Cambodian fermented fish paste (Prahok)'),
('i0000000-0000-0000-0000-000000000010', 'km', 'ទឹកអំពិលទុំ'),
('i0000000-0000-0000-0000-000000000010', 'en', 'Ripe tamarind paste'),
('i0000000-0000-0000-0000-000000000011', 'km', 'ត្រប់វែង ឬត្រប់ស្រួយ'),
('i0000000-0000-0000-0000-000000000011', 'en', 'Asian long purple eggplant'),
('i0000000-0000-0000-0000-000000000012', 'km', 'នំប៉័ងស្រួយ'),
('i0000000-0000-0000-0000-000000000012', 'en', 'Crispy baguette'),
('i0000000-0000-0000-0000-000000000013', 'km', 'ផ្លែល្ពៅមូលផ្អែម'),
('i0000000-0000-0000-0000-000000000013', 'en', 'Kabocha sweet pumpkin'),
('i0000000-0000-0000-0000-000000000014', 'km', 'ស្ករត្នោតធម្មជាតិ'),
('i0000000-0000-0000-0000-000000000014', 'en', 'Natural Cambodian palm sugar');

-- Recipes (16 authentic dishes)
INSERT INTO recipes (id, category_id, slug, main_image_url, preparation_minutes, cooking_minutes, servings, difficulty, status, is_featured) VALUES
('r0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 'fish-amok', 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80', 25, 30, 4, 'MEDIUM', 'PUBLISHED', true),
('r0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000002', 'beef-lok-lak', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80', 20, 15, 3, 'EASY', 'PUBLISHED', true),
('r0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000001', 'samlor-korko', 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80', 30, 40, 5, 'HARD', 'PUBLISHED', true),
('r0000000-0000-0000-0000-000000000004', 'c0000000-0000-0000-0000-000000000005', 'nom-banh-chok', 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80', 40, 35, 4, 'HARD', 'PUBLISHED', true),
('r0000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000005', 'kuy-teav-phnom-penh', 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80', 30, 120, 4, 'MEDIUM', 'PUBLISHED', true),
('r0000000-0000-0000-0000-000000000006', 'c0000000-0000-0000-0000-000000000004', 'bai-sach-chrouk', 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80', 25, 20, 2, 'EASY', 'PUBLISHED', true),
('r0000000-0000-0000-0000-000000000007', 'c0000000-0000-0000-0000-000000000001', 'samlor-machu-trey', 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80', 20, 25, 4, 'EASY', 'PUBLISHED', false),
('r0000000-0000-0000-0000-000000000008', 'c0000000-0000-0000-0000-000000000001', 'prahok-ktis', 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80', 15, 25, 4, 'MEDIUM', 'PUBLISHED', false),
('r0000000-0000-0000-0000-000000000009', 'c0000000-0000-0000-0000-000000000002', 'cha-kroeung-moan', 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80', 20, 20, 4, 'EASY', 'PUBLISHED', false),
('r0000000-0000-0000-0000-000000000010', 'c0000000-0000-0000-0000-000000000006', 'num-ansow-chek', 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80', 45, 180, 6, 'HARD', 'PUBLISHED', false),
('r0000000-0000-0000-0000-000000000011', 'c0000000-0000-0000-0000-000000000006', 'num-krok', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80', 20, 20, 4, 'MEDIUM', 'PUBLISHED', false),
('r0000000-0000-0000-0000-000000000012', 'c0000000-0000-0000-0000-000000000003', 'pleah-sach-ko', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80', 25, 10, 3, 'EASY', 'PUBLISHED', false),
('r0000000-0000-0000-0000-000000000013', 'c0000000-0000-0000-0000-000000000001', 'samlor-kari-moan', 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80', 25, 35, 5, 'MEDIUM', 'PUBLISHED', false),
('r0000000-0000-0000-0000-000000000014', 'c0000000-0000-0000-0000-000000000003', 'chha-trop-dott', 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80', 15, 20, 3, 'EASY', 'PUBLISHED', false),
('r0000000-0000-0000-0000-000000000015', 'c0000000-0000-0000-0000-000000000006', 'sankhya-lapov', 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=1200&q=80', 20, 50, 6, 'MEDIUM', 'PUBLISHED', false),
('r0000000-0000-0000-0000-000000000016', 'c0000000-0000-0000-0000-000000000004', 'num-pang-phate', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80', 15, 10, 2, 'EASY', 'PUBLISHED', false);

-- Recipe Translations (Bilingual Khmer & English)
INSERT INTO recipe_translations (recipe_id, locale, name, description) VALUES
('r0000000-0000-0000-0000-000000000001', 'km', 'អាម៉ុកត្រី', 'ម្ហូបតំណាងជាតិខ្មែរ ធ្វើពីត្រីទឹកសាបស្រស់ លាយជាមួយគ្រឿងបុកស្លឹកគ្រៃ និងខ្ទិះដូង ចំហុយក្នុងកន្ទោងស្លឹកចេក។'),
('r0000000-0000-0000-0000-000000000001', 'en', 'Fish Amok', 'Cambodias signature culinary masterpiece: silky steamed freshwater fish curry infused with yellow kroeung, coconut cream, and kaffir lime, cradled in banana leaves.'),

('r0000000-0000-0000-0000-000000000002', 'km', 'ឡុកឡាក់សាច់គោ', 'សាច់គោឆាក្តៅៗរសជាតិដិត ញ៉ាំជាមួយសាឡាត់ ប៉េងប៉ោះ ខ្ទឹមបារាំង និងទឹកជ្រលក់អំបិលម្រេចក្រូចឆ្មា។'),
('r0000000-0000-0000-0000-000000000002', 'en', 'Beef Lok Lak', 'Caramelized stir-fried beef cubes served over crisp lettuce, cucumber, and fresh tomatoes, paired with a zesty lime and Kampot black pepper dip.'),

('r0000000-0000-0000-0000-000000000003', 'km', 'សម្លកកូរ', 'សម្លប្រពៃណីខ្មែរបុរាណសម្បូរដោយបន្លែចម្រុះជាច្រើនមុខ អង្ករលីង និងត្រីរ៉ស់ស្រស់។'),
('r0000000-0000-0000-0000-000000000003', 'en', 'Samlor Korko', 'Cambodias hearty royal vegetable stew cooked with roasted pounded rice, aromatic herbs, local river fish, and garden greens.'),

('r0000000-0000-0000-0000-000000000004', 'km', 'នំបញ្ចុកទឹកសម្លប្រហើរ', 'នំបញ្ចុកស្រស់ស្រូបជាមួយទឹកសម្លប្រហើរត្រីរ៉ស់បុកជាមួយគ្រឿងស្លឹកគ្រៃ និងបន្លែស្រស់ៗ។'),
('r0000000-0000-0000-0000-000000000004', 'en', 'Nom Banh Chok', 'Iconic Khmer breakfast noodles bathed in a fragrant, golden river-fish and lemongrass broth, garnished with edible flowers and water celery.'),

('r0000000-0000-0000-0000-000000000005', 'km', 'គុយទាវភ្នំពេញ', 'ស៊ុបគុយទាវរសជាតិផ្អែមជាប់មាត់ពីឆ្អឹងជ្រូករម្ងាស់យូរ ជាមួយប្រហិត សាច់ជ្រូក និងបង្គាស្រស់។'),
('r0000000-0000-0000-0000-000000000005', 'en', 'Phnom Penh Noodle Soup (Kuy Teav)', 'A comforting, slow-simmered pork bone and dried seafood broth poured over delicate rice noodles, tender slices of pork, minced pork, and fresh herbs.'),

('r0000000-0000-0000-0000-000000000006', 'km', 'បាយសាច់ជ្រូក', 'បាយពេលព្រឹកបែបខ្មែរ សាច់ជ្រូកប្រឡាក់ខ្ទិះដូងអាំងឈ្ងុយលើធ្យូង ញ៉ាំជាមួយជ្រក់ត្រសក់។'),
('r0000000-0000-0000-0000-000000000006', 'en', 'Bai Sach Chrouk', 'Beloved morning staple: tender pork marinated in coconut milk and garlic, slowly char-grilled and served over steamed jasmine rice with quick-pickled cucumbers.'),

('r0000000-0000-0000-0000-000000000007', 'km', 'សម្លម្ជូរត្រី', 'សម្លម្ជូរស្រឡះមាត់ជាមួយទឹកអំពិលទុំ ត្រីស្រស់ និងបន្លែម្ជូរដូចជាត្រកួន និងម្នាស់។'),
('r0000000-0000-0000-0000-000000000007', 'en', 'Samlor Machu Trey', 'Refreshing sour fish soup balanced with ripe tamarind, fresh pineapple, morning glory, and fragrant herbs like sawtooth coriander.'),

('r0000000-0000-0000-0000-000000000008', 'km', 'ប្រហុកខ្ទិះ', 'ទឹកគ្រឿងប្រហុកបំពងជាមួយខ្ទិះដូង សាច់ជ្រូកចិញ្ច្រាំ និងសណ្តែកដី ញ៉ាំផ្ទាប់ជាមួយបន្លែស្រស់។'),
('r0000000-0000-0000-0000-000000000008', 'en', 'Prahok Ktis', 'Decadent dip of fermented fish, minced pork belly, crushed peanuts, and creamy coconut milk, eaten with crisp fresh garden vegetables.'),

('r0000000-0000-0000-0000-000000000009', 'km', 'ឆាគ្រឿងសាច់មាន់', 'សាច់មាន់ស្រុកឆាជាមួយគ្រឿងស្លឹកគ្រៃបុកឈ្ងុយ ម្ទេសប្លោក និងស្លឹកក្រូចសើច។'),
('r0000000-0000-0000-0000-000000000009', 'en', 'Cha Kroeung Sach Moan', 'Spicy lemongrass stir-fried chicken tossed with aromatic kaffir lime leaves, long beans, and fresh red chilies.'),

('r0000000-0000-0000-0000-000000000010', 'km', 'នំអន្សមចេក', 'នំប្រពៃណីបុណ្យភ្ជុំបិណ្ឌ និងចូលឆ្នាំ ធ្វើពីអង្ករដំណើប ស្នូលចេកទុំ ខ្ចប់ស្លឹកចេកស្ងោរ។'),
('r0000000-0000-0000-0000-000000000010', 'en', 'Num Ansom Chek', 'Traditional festive cylindrical sticky rice cake filled with sweet ripe banana, wrapped securely in banana leaves and slow-steamed to perfection.'),

('r0000000-0000-0000-0000-000000000011', 'km', 'នំគ្រក់', 'នំម្សៅអង្ករលាយខ្ទិះដូង និងស្លឹកខ្ទឹម ដុតក្នុងខ្ទះដីឥដ្ឋឲ្យស្រួយក្រៅទន់ក្នុង។'),
('r0000000-0000-0000-0000-000000000011', 'en', 'Num Krok', 'Crispy yet meltingly creamy coconut rice cake spheres cooked in cast-iron pans, served hot with sweet-savory fish dipping sauce.'),

('r0000000-0000-0000-0000-000000000012', 'km', 'ភ្លាសាច់គោ', 'ញាំសាច់គោបន្ទះឆ្អិនមធ្យម ជាមួយជីរគ្រប់មុខ ខ្ទឹមក្រហម សណ្តែកកួរ និងទឹកក្រូចឆ្មា។'),
('r0000000-0000-0000-0000-000000000012', 'en', 'Pleah Sach Ko', 'Lime-cured beef salad infused with lemongrass, fresh mint, holy basil, shallots, and toasted peanuts.'),

('r0000000-0000-0000-0000-000000000013', 'km', 'សម្លការីសាច់មាន់', 'ការីក្រហមខ្មែររសជាតិស្រាល ផ្អែមឈ្ងុយខ្ទិះដូង បន្លែដំឡូង និងសាច់មាន់ស្រុក។'),
('r0000000-0000-0000-0000-000000000013', 'en', 'Khmer Red Chicken Curry', 'Milder and subtly fragrant red curry with chicken, sweet potatoes, coconut milk, served with freshly baked baguettes or noodles.'),

('r0000000-0000-0000-0000-000000000014', 'km', 'ឆាត្រប់ដុតសាច់ជ្រូកចិញ្ច្រាំ', 'ត្រប់វែងដុតលើធ្យូងឲ្យឈ្ងុយ ឆាជាមួយសាច់ជ្រូកចិញ្ច្រាំ និងខ្ទឹមសបំពង។'),
('r0000000-0000-0000-0000-000000000014', 'en', 'Chha Trop Dott', 'Smoky char-grilled eggplant topped with a savory stir-fry of minced pork, garlic, and oyster sauce.'),

('r0000000-0000-0000-0000-000000000015', 'km', 'សង់ខ្យាល្ពៅ', 'បង្អែមសាច់ខ្យាពងមាន់ស្ករត្នោត ចាក់ក្នុងផ្លែល្ពៅមូល រួចយកទៅចំហុយឲ្យឆ្អិនទន់ល្មើយ។'),
('r0000000-0000-0000-0000-000000000015', 'en', 'Sankhya Lapov', 'Luscious palm sugar and coconut custard steamed inside a whole kabocha pumpkin, sliced into jewel-like segments.'),

('r0000000-0000-0000-0000-000000000016', 'km', 'នំប៉័ងប៉ាតេខ្មែរ', 'នំប៉័ងស្រួយកាត់កណ្តាល លាបប៉ាតេ សាច់ប៉ាតេ ជ្រក់ល្ហុង និងម្រេចកំពត។'),
('r0000000-0000-0000-0000-000000000016', 'en', 'Num Pang Phaté', 'Crisp Cambodian street baguette layered with rich pork pâté, Vietnamese-style ham, pickled green papaya, and fresh chili.');

-- Recipe Ingredients Mapping
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, display_order) VALUES
-- Fish Amok
('r0000000-0000-0000-0000-000000000001', 'i0000000-0000-0000-0000-000000000001', 500, 'g', 1),
('r0000000-0000-0000-0000-000000000001', 'i0000000-0000-0000-0000-000000000002', 3, 'tbsp', 2),
('r0000000-0000-0000-0000-000000000001', 'i0000000-0000-0000-0000-000000000003', 400, 'ml', 3),
('r0000000-0000-0000-0000-000000000001', 'i0000000-0000-0000-0000-000000000014', 1.5, 'tbsp', 4),
-- Beef Lok Lak
('r0000000-0000-0000-0000-000000000002', 'i0000000-0000-0000-0000-000000000004', 400, 'g', 1),
('r0000000-0000-0000-0000-000000000002', 'i0000000-0000-0000-0000-000000000005', 1, 'tbsp', 2),
('r0000000-0000-0000-0000-000000000002', 'i0000000-0000-0000-0000-000000000014', 1, 'tsp', 3),
-- Nom Banh Chok
('r0000000-0000-0000-0000-000000000004', 'i0000000-0000-0000-0000-000000000008', 500, 'g', 1),
('r0000000-0000-0000-0000-000000000004', 'i0000000-0000-0000-0000-000000000001', 300, 'g', 2),
('r0000000-0000-0000-0000-000000000004', 'i0000000-0000-0000-0000-000000000002', 3, 'tbsp', 3),
-- Bai Sach Chrouk
('r0000000-0000-0000-0000-000000000006', 'i0000000-0000-0000-0000-000000000006', 350, 'g', 1),
('r0000000-0000-0000-0000-000000000006', 'i0000000-0000-0000-0000-000000000007', 300, 'g', 2),
('r0000000-0000-0000-0000-000000000006', 'i0000000-0000-0000-0000-000000000014', 1, 'tbsp', 3);

-- Recipe Steps
INSERT INTO recipe_steps (id, recipe_id, step_number, image_url) VALUES
-- Fish Amok Steps
('s0000000-0000-0000-0000-000000000001', 'r0000000-0000-0000-0000-000000000001', 1, 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'),
('s0000000-0000-0000-0000-000000000002', 'r0000000-0000-0000-0000-000000000001', 2, 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'),
('s0000000-0000-0000-0000-000000000003', 'r0000000-0000-0000-0000-000000000001', 3, 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80'),

-- Beef Lok Lak Steps
('s0000000-0000-0000-0000-000000000004', 'r0000000-0000-0000-0000-000000000002', 1, 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80'),
('s0000000-0000-0000-0000-000000000005', 'r0000000-0000-0000-0000-000000000002', 2, 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80');

-- Step Translations
INSERT INTO step_translations (step_id, locale, instruction) VALUES
('s0000000-0000-0000-0000-000000000001', 'km', 'លាងសម្អាតសាច់ត្រីរ៉ស់ឲ្យស្អាត រួចកាត់ជាបន្ទះស្តើងល្មម។'),
('s0000000-0000-0000-0000-000000000001', 'en', 'Clean and slice the freshwater fish into bite-sized bite pieces.'),
('s0000000-0000-0000-0000-000000000002', 'km', 'ច្របល់គ្រឿងស្លឹកគ្រៃបុក ខ្ទិះដូង ពងទា និងស្ករត្នោតឲ្យចូលគ្នាសព្វ រួចដាក់សាច់ត្រីចូល។'),
('s0000000-0000-0000-0000-000000000002', 'en', 'Whisk the yellow kroeung paste with thick coconut milk, egg, and palm sugar until velvety, then gently fold in the fish.'),
('s0000000-0000-0000-0000-000000000003', 'km', 'ដួសដាក់ក្នុងកន្ទោងស្លឹកចេក រួចយកទៅចំហុយរយៈពេល ២០ ទៅ ៣០ នាទីរហូតដល់ឆ្អិនខាប់។'),
('s0000000-0000-0000-0000-000000000003', 'en', 'Spoon the curry mixture into traditional banana leaf cups and steam for 20-30 minutes until set. Top with coconut cream drizzle and julienned kaffir lime leaves.'),

('s0000000-0000-0000-0000-000000000004', 'km', 'កាត់សាច់គោជាដុំតូចៗ រួចប្រឡាក់ជាមួយប្រេងខ្យង ទឹកស៊ីអ៊ីវ ខ្ទឹមស និងស្ករត្នោត ២០ នាទី។'),
('s0000000-0000-0000-0000-000000000004', 'en', 'Dice beef into cubes and marinate with soy sauce, oyster sauce, minced garlic, and palm sugar for 20 minutes.'),
('s0000000-0000-0000-0000-000000000005', 'km', 'ដាក់ខ្ទះឲ្យក្តៅខ្លាំង រួចឆាសាច់គោឲ្យឆ្អិនស្រួយក្រៅ លើកដាក់លើចានដែលមានបន្លែ និងទឹកម្រេចក្រូចឆ្មា។'),
('s0000000-0000-0000-0000-000000000005', 'en', 'Sear over smoking high heat for 2-3 minutes. Serve over a bed of crisp greens and sliced tomatoes with freshly mixed Kampot pepper lime dip.');
